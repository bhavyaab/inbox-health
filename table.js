function createTable() {
  webDB.execute(
    'CREATE TABLE IF NOT EXISTS emails (' +
      'id INTEGER PRIMARY KEY, ' +
      'mailId INTEGER NOT NULL, ' +
      'sender VARCHAR NOT NULL, ' +
      'senderName VARCHAR NOT NULL, ' +
      'unsubscribe VARCHAR NOT NULL);'
  );
}

var createEmail = function(obj) {
  webDB.execute([{
    'sql': 'INSERT INTO emails ' +
    '(mailId, sender, senderName, unsubscribe) ' +
    'VALUES (?, ?, ?, ?);',
    'data': [obj.mailId, obj.from, obj.senderName, obj.unsubscribe]
  }]);
};

function unsubscribeClick() {
  $('#unsubscribe-page').on('click', 'a', function() {
    var $link = $(this).attr('href');
    $(this).parent().parent().slideUp();
    webDB.execute([{
      'sql': 'DELETE FROM emails WHERE unsubscribe = ?',
      'data': [$link]
    }]);
  });
}

function signOut() {
  webDB.execute('DROP TABLE emails');
  window.location = 'https://accounts.google.com/logout';
}

function getUniqueSenders() {
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
        handleAuthResult();
        page('/');
      }
    }
  );
}

createTable();
getUniqueSenders();
unsubscribeClick();
