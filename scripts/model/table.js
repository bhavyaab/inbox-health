(function(module){
  var table = {};
  createTable = function() {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS emails (' +
        'mailId INTEGER NOT NULL, ' +
        'sender VARCHAR NOT NULL, ' +
        'senderName VARCHAR NOT NULL, ' +
        'unsubscribe VARCHAR NOT NULL);'
    );
  };

  table.createEmail = function(obj) {
    webDB.execute([{
      'sql': 'INSERT INTO emails ' +
      '(mailId, sender, senderName, unsubscribe) ' +
      'VALUES (?, ?, ?, ?);',
      'data': [obj.mailId, obj.sender, obj.senderName, obj.unsubscribe]
    }]);
  };

  unsubscribeClick = function() {
    $('#unsubscribe-page').on('click', 'a', function() {
      var $link = $(this).attr('href');
      $(this).parent().parent().slideUp();
      webDB.execute([{
        'sql': 'DELETE FROM emails WHERE unsubscribe = ?',
        'data': [$link]
      }]);
    });
  };

  getUniqueSenders = function() {
    webDB.execute(
      'SELECT * FROM emails ORDER BY senderName ASC',
      function(emails) {
        var $logout = $('#logout-button');
        if (emails.length) {
          $logout.fadeIn();
          var template = Handlebars.compile($('#unsubscribe-template').html());
          emails.forEach(function(email) {
            $('#unsubscribe-page ul').append(template(email));
          });
          page('/unsubscribe');
        } else {
          $logout.hide();
          auth.handleAuthResult();
          page('/');
        }
      }
    );
  };

  createTable();
  getUniqueSenders();
  unsubscribeClick();
  module.table = table;
})(window);
