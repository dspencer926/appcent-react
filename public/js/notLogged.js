timer = document.getElementById('timer');

timer2 = setTimeout(function(){
  timer.innerHTML = '2';
}, 1000);

timer1 = setTimeout(function(){
  timer.innerHTML = '1';
}, 2000);


t1 = window.setTimeout(function(){ 
  window.location.replace('/');          //    <------- got from StackOverflow   :D
  },3000);