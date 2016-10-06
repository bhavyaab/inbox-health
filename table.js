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

var deleteEmail = function(obj) {
  webDB.execute([{
    'sql': 'DELETE FROM emails WHERE id = ?;',
    'data': [obj.id]
  }]);
};

function getUniqueSenders() {
  webDB.execute(
    'SELECT * FROM emails ORDER BY senderName ASC',
    function(emails) {
      if (emails.length) {
        var template = Handlebars.compile($('#unsubscribe-template').html());
        emails.forEach(function(email) {
          $('#unsubscribe-page').append(template(email));
        });
        page('/unsubscribe');
      } else {
        handleAuthResult();
        page('/');
      }
    }
  );
}

createTable();
getUniqueSenders();
