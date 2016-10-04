var emails = {}; //eslint-disable-line

function Unsubscribe(emails) { //eslint-disable-line
  this.company = emails.company;
  this.url = emails.url;
}

Unsubscribe.prototype.toHtml = function() {
  var source = $('#unsubscribe-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};
