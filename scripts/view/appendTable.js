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
      if(lookUpTable.hasOwnProperty(from)){}
      else{
        lookUpTable[from] = true;
        var uniqueObj = new GetInfo(id, from, unsubscribe, senderName);
        listDelete.listMessages(from, senderName);
        table.createEmail(uniqueObj);
        var template = Handlebars.compile($('#unsubscribe-template').html());
        $('#unsubscribe-page ul').append(template(uniqueObj));
        $('#logout-button').fadeIn();
        document.getElementById('profile-image').src = profile.imageUrl;
        anim.addValue('uniqueSenderNo');
        anim.insert('uniqueSenderNo');
      };
    };
  };

  module.append = append;
})(window);
