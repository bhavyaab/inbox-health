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
  return  value;
};
anim.getRandomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
anim.insert = function(key){
  var value = localStorage.getItem(key);
  $('#number').html(value);
  if(value > 1){
    $('#profile p').html('Unique senders');
  }
  if(localStorage.getItem('senderIdsTable.all') === value){
  }else{
    $('#profile div').css('color', anim.getRandomColor());
  };
};
anim.insert('uniqueSenderNo');
module.anim = anim;
})(window);
