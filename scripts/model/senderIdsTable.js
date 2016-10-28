(function(module){
 var senderIdsTable = {};

createTableD = function(){
  webDB.execute(
   'CREATE TABLE IF NOT EXISTS SENDERiDS('+
     'SENDERNAME VARCHAR NOT NULL' +
     'TOTAL IDS VARCHAR NOT NULL);'
  );
};
 senderIdsTable.createDelTable = function(){
  webDB.execute([{
   'sql': 'INSERT INTO createDelTable ' +
   '(senderName, ids)' +
   'VALUES(?,?);' +
   'data': [senderName, ids]
  }]);
};
 createTableD();
 module.senderIdsTable = senderIdsTable;
})(window)
