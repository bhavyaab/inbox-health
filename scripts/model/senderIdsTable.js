(function(module){
  var senderIdsTable = {};
  createTableD = function(){
    webDB.execute(
     'CREATE TABLE IF NOT EXISTS senderIds(' +
       'sender VARCHAR NOT NULL,' +
       'allIds VARCHAR NOT NULL);'
    );
  };
  senderIdsTable.createDelTable = function(from, ids){
    webDB.execute([{
      'sql': 'INSERT INTO senderIds ' +
      '(sender, allIds)' +
      'VALUES(?,?);',
      'data': [from, ids]
    }]);
  };
  createTableD();
  module.senderIdsTable = senderIdsTable;
})(window);
