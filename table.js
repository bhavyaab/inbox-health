emailTable = {};

function createTable() {
  webDB.execute(
    'CREATE TABLE IF NOT EXISTS emails (' +
      'id INTEGER PRIMARY KEY, ' +
      'senderName VARCHAR NOT NULL, ' +
      'unsubscribe VARCHAR NOT NULL);'
  );
}

emailTable.prototype.createEmail = function() {
  webDB.execute([{
    'sql': 'INSERT INTO emails ' +
    '(senderName, unsubscribe) ' +
    'VALUES (?, ?);',
    'data': [this.senderName, this.unsubscribe]
  }]);
};

emailTable.prototype.deleteEmail = function() {
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

      }
    }
  );
}
