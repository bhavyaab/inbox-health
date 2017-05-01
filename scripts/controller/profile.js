(function(module){
  var profile = {};
  profile.displayName;
  profile.imageUrl;
  profile.profileUrl;
  profile.info = function(){
    var request = gapi.client.plus.people.get({
      'userId' : 'me'
    });

    request.execute(function(resp) {
      profile.displayName = resp.displayName;
      profile.imageUrl = resp.image.url;
      profile.profileUrl = resp.url;
      profileTable.insert(profile.displayName, profile.imageUrl, profile.profileUrl);
    });
  };
  (module).profile = profile;
})(window);
