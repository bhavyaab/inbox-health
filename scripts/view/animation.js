(function(module){
  var anim = {};
  anim.initiate = function(){
    var uniqueSenderNo = 0;
    var emailPulled = 0;
    localStorage.setItem('emailPulled', emailPulled);
    localStorage.setItem('uniqueSenderNo', uniqueSenderNo);
  };
  anim.addValue = function(key) {
    var value = localStorage.getItem(key);
    value++;
    localStorage.setItem(key, value);
    return value;
  };
  anim.getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  };
  anim.insert = function(key){
    var value = localStorage.getItem(key);
    $('#number').html(value);
    if(value > 1){
      $('#profile p').html('Unique senders');
    }
  };
  anim.insert('uniqueSenderNo');
  module.anim = anim;
})(window);
