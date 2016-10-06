/*6*/
// var requireInfo = [];
function GetInfo(id, from, unsubscribe,senderName){
  this.mailId = id;
  this.from = from;
  this.unsubscribe = unsubscribe;
  this.senderName = senderName;
};

var lookUpTable = {};
function noSubscribeHeader(currMessage) {
  var raw;
  if (currMessage.payload.parts) {
    if (currMessage.payload.parts.length > 1) {
      if (currMessage.payload.parts[1].body.data) {
        try {
          raw = currMessage.payload.parts[1].body.data.split(/[-_]/);
        }
        catch(e) {
        }
      }
    } else {
      if (currMessage.payload.parts[0].parts) {
        try {
          raw = currMessage.payload.parts[0].parts[1].body.data.split(/[-_]/);
        }
        catch(e) {
        }
      }
    }
  } else {
    try {
      raw = currMessage.payload.body.data.split(/[-_]/);
    }
    catch(e) {
    }
  }
  if (raw) {
    var newString = raw.reduce(function(acc, next) {
      try {
        return acc + (atob(next));
      }
      catch(e) {
      }
    }, '');
    var unsubscribePosition = newString.search('unsubscribe');
    if (unsubscribePosition === -1) {
      unsubscribePosition = newString.search('opt out');
    }
    var cutTo;
    if (unsubscribePosition - 1200 < 0) {
      cutTo = 0;
    } else {
      cutTo = unsubscribePosition - 1200;
    }
    var linkString = newString.slice(cutTo, unsubscribePosition);
    var allHrefs = linkString.split('href="');
    var link;
    if (allHrefs.length === 1) {
      if (unsubscribePosition + 1200 > newString.length) {
        cutTo = newString.length - 1;
      } else {
        cutTo = unsubscribePosition + 1200;
      }
      linkString = newString.slice(unsubscribePosition, cutTo);
      allHrefs = linkString.split('href="');
      if (allHrefs.length !== 1) {
        link = allHrefs[1].split('"')[0];
      }
    } else {
      link = allHrefs[allHrefs.length - 1].split('"')[0];
    }
  }
  return link;
};

var generateInfo = function(resp){ //eslint-disable-line
  var id = resp.id;
  var from = resp.payload.headers.reduce(function(curr, next) {
    if (next.name === 'From' || next.name === 'sender') {
      curr.push(next.value);
    }
    return curr;
  },[])[0];
  var unsubscribe = resp.payload.headers.filter(function(itemH) {
    return itemH.name === 'List-Unsubscribe';
  })[0];
  if (!unsubscribe) {
    unsubscribe = noSubscribeHeader(resp);
  } else {
    unsubscribe = unsubscribe.value;
    if(unsubscribe.includes('<')){
      unsubscribe = (unsubscribe.split('<')[1]).split('>')[0];
    };
  };
  senderName = from.split('<')[0];
  if(from.includes('<')){
    from = (from.split('<')[1]).split('>')[0];
  };
  if(unsubscribe){
    if(lookUpTable.hasOwnProperty(senderName)){}
    else{
      lookUpTable[senderName] = true;
      var template = Handlebars.compile($('#unsubscribe-template').html());
      var uniqueObj = new GetInfo(id, from, unsubscribe, senderName);
      createEmail(uniqueObj);
      $('#unsubscribe-page').append(template(uniqueObj));
    };
  };
};
