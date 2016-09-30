//validate input data
function validateForm() {
  var x = document.forms['user_email']['email'].value;
  if (x == null || x == '') {
    alert('email must be filled out');
    return false;
  }
}
