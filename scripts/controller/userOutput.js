/*6*/
var allInfo = [];
var requireInfo = [];
function GetInfo(id, from, unsubscribe){
  this.id = id;
  this.from = from;
  this.unsubscribe = unsubscribe;
};

var generateInfo = function(resp){
  var id = resp.id;
  var from = resp.payload.headers.reduce(function(curr, next) {
    if (next.name === 'From' || next.name === 'sender') {
      curr.push(next.value);
    }
    return curr;
  },[])[0];
  var unsubscribe = resp.payload.headers.find(function(itemH) {
    return itemH.name === 'List-Unsubscribe';
  });
  if (!unsubscribe) {
    unsubscribe = noSubscribeHeader(resp);
  } else {
    unsubscribe = unsubscribe.value;
  }
  requireInfo.push(new GetInfo(id, from, unsubscribe));
};
