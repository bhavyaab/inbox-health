// (function(module) {
//   var watchGamilController = {};

//   watchGamilController.notification = function() {
//     var accessToken = localStorage.getItem('accessToken');
//         $.ajax({
//           url: 'https://www.googleapis.com/gmail/v1/users/me/watch',
//           type: 'post',
//           headers: {'Content-Type': 'application/json'},
//           success: function(){
//             // console.log(' watch data recieved ')
//           }
//         }).fail(function(error){
//           console.error(error);
//           // something.wentWrong();
//         });
// }

//   module.watchGamilController = watchGamilController;
// })(window);
