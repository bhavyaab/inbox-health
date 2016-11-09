(function(module){
  var senderIdsTable = {};
  createTableD = function(){
    webDB.execute(
     'CREATE TABLE IF NOT EXISTS senderIds(' +
       'sender VARCHAR NOT NULL,' +
       'emailsNo INTEGER NOT NULL,' +
       'allIds VARCHAR NOT NULL);'
    );
  };
  senderIdsTable.createDelTable = function(from, ids){
    webDB.execute([{
      'sql': 'INSERT INTO senderIds' +
      '(sender, emailsNo, allIds)' +
      'VALUES(?,?,?);',
      'data': [from, ids.length, ids]
    }]);
  };
  createTableD();
  module.senderIdsTable = senderIdsTable;
})(window);
