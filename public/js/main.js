function showLogin() {
  $('#login-div').removeClass('hidden');
  $('#login').attr('class', 'hidden');
  $('#signup').attr('class', 'hidden');
}
function showSignup() {
  $('#signup-div').removeClass('hidden');
  $('#login').attr('class', 'hidden');
  $('#signup').attr('class', 'hidden');
}
function goBack() {
  $('#login-div').attr('class', 'hidden');
  $('#signup-div').attr('class', 'hidden');
  $('#login').removeClass('hidden');
  $('#signup').removeClass('hidden');
}

document.getElementById('login').addEventListener('click', showLogin)
document.getElementById('signup').addEventListener('click', showSignup)
let backButtons = document.querySelectorAll('.back-button')
backButtons[0].addEventListener('click', goBack);
backButtons[1].addEventListener('click', goBack);

