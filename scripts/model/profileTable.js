(function(module){
  var profileTable = {};
  createTable = function(){
    webDB.execute(
     'CREATE TABLE IF NOT EXISTS profileTable(' +
       'displayName VARCHAR NOT NULL,' +
       'imageUrl VARCHAR NOT NULL,' +
       'profileUrl VARCHAR NOT NULL);'
    );
  };
  profileTable.createTable = function(displayName, imageUrl, profileUrl){
    webDB.execute([{
      'sql': 'INSERT INTO profileTable' +
      '(displayName, imageUrl, profileUrl)' +
      'VALUES(?,?,?);',
      'data': [displayName, imageUrl, profileUrl]
    }]);
  };
  createTable();
  webDB.execute('SELECT * FROM profileTable', function(profile) {
    if (profile.length) {
      document.getElementById('profile-image').src = profile[0].imageUrl;
    }});
  module.profileTable = profileTable;
})(window);
