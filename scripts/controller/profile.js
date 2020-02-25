import { response } from "express";

(function(module){
  var profile = {};
  profile.displayName;
  profile.picture;
  profile.profileUrl;
  profile.info = function(){
    var request = gapi.client.userinfo.get({
      'userId' : 'me'
    });

    request.execute(function(resp) {
      profile.displayName = resp.displayName;
      profile.picture = resp.picture;
      profile.profileUrl = resp.url;
      profileTable.insert(profile.displayName, profile.picture, profile.profileUrl);
    });
  };
  (module).profile = profile;
})(window);

// https://www.googleapis.com/userinfo/v2/me