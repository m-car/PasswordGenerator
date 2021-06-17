// Assignment Code
var generateBtn = document.querySelector('#generate');
var pool=[];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// wHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
if (numChar < 8 && numChar > 128){

} 

// prompt character type
var lower = confirm("lowercase?")
var upper = confirm("uppercase?")
var num = confirm("numeric?")
var spec = confirm("special?")

// 
var pool=[];
if (lower){
  pool.concat(lowerCase);
}else if(upper){
  pool.concat(upperCase);
}else if(num){
  pool.concat(numbers);
}else if(spec){
  pool.concat(special);
}else{}

