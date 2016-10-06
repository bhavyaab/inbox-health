function createTable() {
  webDB.execute(
    'CREATE TABLE IF NOT EXISTS emails (' +
      'id INTEGER PRIMARY KEY, ' +
      'senderName VARCHAR NOT NULL, ' +
      'unsubscribe VARCHAR NOT NULL);'
  );
}

var createEmail = function() {
  webDB.execute([{
    'sql': 'INSERT INTO emails ' +
    '(senderName, unsubscribe) ' +
    'VALUES (?, ?);',
    'data': [this.senderName, this.unsubscribe]
  }]);
};

var deleteEmail = function() {
  webDB.execute([{
    'sql': 'DELETE FROM emails WHERE id = ?;',
    'data': [this.id]
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
        unsubscribeController.index();
      } else {
        handleAuthResult();
      }
    }
  );
}
