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
      console.log('response:', response);
      profile.displayName = resp.displayName;
      profile.picture = resp.image.url;
      profile.profileUrl = resp.url;
      profileTable.insert(profile.displayName, profile.picture, profile.profileUrl);
    });
  };
  (module).profile = profile;
})(window);

// https://www.googleapis.com/userinfo/v2/me