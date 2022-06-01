

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Initiate prompts 
function generatePassword() { 

   // user can select between 8-121 characters  
// Password length prompt     
var pwdLength = (prompt("How many characters would you like in your pw? You got between 7 and 21 buddy"));

while (isNaN(pwdLength) || pwdLength < 7 || pwdLength > 21) {
    alert("Between the numbers 7 and 21 foo.. try again");
    var pwdLength = (prompt("Let's try this again.. between the numbers 7 and 21"));
}

alert(`Thank you, your password will contain ${pwdLength} characters`);


// user is prompted to include lowercase, uppercase, numberic, and special characters 

var characterTypes = [];

var lowerCase = confirm("Please click OK to include lowecase letters in your password, otherwise click CANCEL");
if (lowerCase === true) {
    characterTypes.push(0);
}
console.log(lowerCase);

var upperCase = confirm("Please click OK to include lowercase letters in your password, otherwise click CANCEL");
if (upperCase === true) {
    characterTypes.push(1);
}
console.log(upperCase);

var numeric = confirm("Please click OK to include numeros, otherwise click CANCEL");
if (numeric === true) {
    characterTypes.push(2);
    }
console.log(numeric);

var special = confirm("Please click OK to include special characters, otherwise click CANCEL");
if (special === true) {
    characterTypes.push(3);
}
console.log(special);

console.log(characterTypes);

var getPassword = "";

// for loop determines characters based on parameters set below 
for (var i = 0; i < pwdLength; i++) {
var characterType = 
characterTypes[Math.floor(Math.random() * characterTypes.length)];
console.log(characterType);

// random character type with number then ascii code to values 
if (characterType === 0) {
    console.log("Random lowercase");
// #97 is lowercase in the ascii table 
var characterCode = Math.floor(Math.random() * 25) + 97;
      console.log(characterCode);
      var asciiCode = String.fromCharCode(characterCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
}
else if (characterType === 1) {
    console.log("Random uppercase");

    var characterCode = Math.floor(Math.random() * 25) + 65;
      console.log(characterCode);
      var asciiCode = String.fromCharCode(characterCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
} 
else if (characterType === 2) {
    console.log("Random number");
   
    var characterCode = Math.floor(Math.random() * 9) + 48;
    console.log(characterCode);
    var asciiCode = String.fromCharCode(characterCode);
    console.log(asciiCode);
    getPassword = getPassword.concat(asciiCode);
  }

  else if (characterType === 3) {
    console.log("Random special character");
    var characterCode = Math.floor(Math.random() * 5) + 33;
    var asciiCode = String.fromCharCode(characterCode);
    getPassword = getPassword.concat(asciiCode);
  }

  else {
      alert("Please select at least one of these options bro");
      return "Fine, you don't get a password"
  }
  console.log("Your password is" + getPassword); 
} 
return getPassword;
} 

// Write password to the #password input
function writePassword() {
    // write password 
console.log("Button click");
  var password = generatePassword();
  console.log("Display Password" + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
