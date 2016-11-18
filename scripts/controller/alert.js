(function(module){
  var alertS = {};
  alertS.alert = function(){
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover these eamils!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      closeOnConfirm: false
    },
 function(){
   swal('Deleted!', 'Your emails has been deleted.', 'success');
 });
  };
  module.alertS = alertS;
})(window);
