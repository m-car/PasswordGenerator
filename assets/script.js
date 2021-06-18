// Assignment Code
var generateBtn = document.querySelector('#generate');
var pool=[]; //array of selected characters based on case/type
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ['1','2','3','4','5','6','7','8','9','0']
var special = ['!','@','#','$','%','^','&','*']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


function generatePassword(){
  pool= [] //resets password character pool 
  // Password length
  var passLength = prompt("Enter required character length:")
  if (passLength > 8 && passLength < 128) {
    
    //Type/Case selection
    var lower = confirm("lowercase?");
    var upper = confirm("uppercase?");
    var num = confirm("numeric?");
    var spec = confirm("special?");
  
    //Builds array of available characters to choose from, based on previous task. 
    if ((lower)||(upper)||(num)||(spec)) {
        if (lower){
          pool = pool.concat(lowerCase);
        }if(upper){
          pool = pool.concat(upperCase);
        }if(num){
          pool = pool.concat(numbers);
        }if(spec){
          pool = pool.concat(special);
        }
          //what happens when all are false
        }else{ 
          alert("you need to select one!");
          generatePassword();
        }
  


    // TEST CASE TO PRINT POOL ARRAY
    // var poolstring = pool.toString();
    // console.log(poolstring);
    // console.log(pool.length);
    //TEST CASE 

    var pass='';
    var temp;
    for (var i = 0; i< passLength; i++){
      
          //Random number in range of pool[] length
          var index = getRandomInt(pool.length)
          // select character in pool[], add to string 'pass'
          temp = (pool[index]);
          pass = pass.concat(temp);
    }
        console.log(pass);
        return pass;
  }
    
}

