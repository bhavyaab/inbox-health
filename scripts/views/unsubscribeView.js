

function appendUnsubscribe() { //eslint-disable-line
  unique.forEach(function(obj) {
    $('#unsubscribe-page').append(obj.toHtml());
  });
}

//take getInfo objects and turn into unsubscribe objects
GetInfo.prototype.toHtml = function() {
  var template = Handlebars.compile($('#unsubscribe-template').html());
  return template(this);
};
