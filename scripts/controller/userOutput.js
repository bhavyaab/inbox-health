/*6*/
var allInfo = [];
var requireInfo = [];
function GetInfo(id, from, unsubscribe,senderName){
  this.id = id;
  this.from = from;
  this.unsubscribe = unsubscribe;
  this.senderName = senderName;
};
var unique = [];
var lookUpTable = {};
var getUniqueSenders = function(){
  requireInfo.forEach(function(item){
    if(lookUpTable.hasOwnProperty(item.senderName)){}
    else{
      lookUpTable[item.senderName] = true;
      unique.push(item);
    };
  });
};

var generateInfo = function(resp){
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
  var possibleSenderName = from.split('@')[1].split('.');
  senderName = (from.split('@')[1].split('.'))[possibleSenderName.length - 2];
  if(senderName.length < 3){
    senderName = (from.split('@')[1].split('.'))[possibleSenderName.length - 3];
  };
  from = (from.split('<')[1]).split('>')[0];
  if(unsubscribe){
    requireInfo.push(new GetInfo(id, from, unsubscribe, senderName));
  };
  getUniqueSenders();
};
