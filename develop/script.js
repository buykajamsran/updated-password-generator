// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var wordlength;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecialcharacter;

function generatePassword() {
    
// 1. Prompt the user for the password criteria
//  a. Password length 8 - 128
wordlength = parseInt(prompt("Choose length of the password"));
    if (!wordlength) {
        alert("Add value");
    } else if (wordlength < 8 || wordlength > 128) {
        wordlength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));
    };
//  b. Lowercase, uppsercase, numbers, special characters
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
specialcharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~"];

// 2. Validate the input
// 3. Generate password based on criteria

// 4. Display password on screen
    return "Generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
