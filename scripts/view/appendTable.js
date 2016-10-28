(function(module) {
  var append = {};
  var lookUpTable = {};

  function GetInfo(id, from, unsubscribe,senderName){
    this.mailId = id;
    this.from = from;
    this.unsubscribe = unsubscribe;
    this.senderName = senderName;
  };

  append.generateData = function(id, from, unsubscribe, senderName) {
    if(unsubscribe){
      if(lookUpTable.hasOwnProperty(senderName)){}
      else{
        lookUpTable[senderName] = true;
        var template = Handlebars.compile($('#unsubscribe-template').html());
        var uniqueObj = new GetInfo(id, from, unsubscribe, senderName);
        table.createEmail(uniqueObj);
        $('#logout-button').fadeIn();
        $('#unsubscribe-page ul').append(template(uniqueObj));
         // call listDelete function.
        listDelete.listMessages(from, senderName);
      };
    };
  };

  module.append = append;
})(window);
