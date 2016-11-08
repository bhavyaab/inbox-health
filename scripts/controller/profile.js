(
 function(module){
   var profile = {};
   profile.info = function(){
    var request = gapi.client.plus.people.get({
   'userId': 'me'
 });
 request.execute(function(resp) {
   console.log('Retrieved profile for:' + resp.displayName);
 });
   };
 }
 module.profile = profile;
)(window);
