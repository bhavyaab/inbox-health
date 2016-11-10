(function(module) {
  var append = {};
  var lookUpTable = {};

  function GetInfo(id, from, unsubscribe,senderName){
    this.mailId = id;
    this.sender = from;
    this.unsubscribe = unsubscribe;
    this.senderName = senderName;
  };

  append.generateData = function(id, from, unsubscribe, senderName) {
    if(unsubscribe){
      var property = from.split('@')[1];
      if(lookUpTable.hasOwnProperty(property)){}
      else{
        lookUpTable[property] = true;
        var uniqueObj = new GetInfo(id, from, unsubscribe, senderName);
        listDelete.listMessages(from, senderName);
        table.createEmail(uniqueObj);
        var template = Handlebars.compile($('#unsubscribe-template').html());
        $('#unsubscribe-page ul').append(template(uniqueObj));
        $('#logout-button').fadeIn();
        document.getElementById('profile-image').src = profile.imageUrl;
      };
    };
  };

  module.append = append;
})(window);
