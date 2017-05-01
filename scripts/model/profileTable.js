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
  profileTable.insert = function(displayName, imageUrl, profileUrl){
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
      try{
        document.getElementById('profile-image').src = profile[0].imageUrl;
        document.getElementById('profile-name').innerHTML = profile[0].displayName;
        document.getElementById('authorize-button').setAttribute( 'onClick', function() { page('/unsubscribe'); });
      }
      catch(e) {
        document.getElementById('profile-image').src = 'img/photo.jpg';
      }
    }});
  module.profileTable = profileTable;
})(window);
