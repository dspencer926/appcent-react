
let vowelChoices = [];

function vowelChoice(e) {
  let newVowel = this.innerHTML;
  vowelChoices.push(newVowel);
  $('<div/>').attr('class', 'vowel-chosen').appendTo('#vowel-choice-div').html(newVowel);
  console.log(vowelChoices);
  this.remove();


}









document.getElementById('vowel-choice1').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice2').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice3').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice4').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice5').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice6').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice7').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice8').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice9').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice10').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice11').addEventListener('click', vowelChoice);
