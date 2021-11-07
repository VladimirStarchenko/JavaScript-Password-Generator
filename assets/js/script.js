// Assignment code here
const uppercaseOptions = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseOptions = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolOptions = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "<",
  ">",
];

var choices = [];

function generatePassword() {
  var numCharacters = prompt(
    "how many characters would you like your password to have between 8 and 128 characters?"
  );
  if (numCharacters < 8 || numCharacters > 128) {
    alert("Must be betweenn 8 and 128 characters!");
    generatePassword();
  }

  var includeUpper = confirm("Would you like to include Uppercase letters?");
  var includeLower = confirm("Would you like to include Lowercase letters?");
  var includeNumbers = confirm(
    "Would you like to include Numbers in your password?"
  );
  var includeSymbols = confirm(
    "Would you like to include Special Characters in your password?"
  );

  //If patron makes no selection
  if (!includeNumbers && !includeUpper && !includeLower && !includeSymbols) {
    alert("You must make at least 1 valid character selection!");
    console.log(choices);
  }
  //If patron chooses to include all selections
  else if (includeUpper && includeLower && includeNumbers && includeSymbols) {
    choices = uppercaseOptions.concat(
      lowercaseOptions,
      numberOptions,
      symbolOptions
    );
    console.log(choices);
  }
  //if patron chooses to include 3 selections
  else if (includeUpper && includeLower && includeNumbers) {
    choices = uppercaseOptions.concat(lowercaseOptions, numberOptions);
    console.log(choices);
  } else if (includeUpper && includeLower && includeSymbols) {
    choices = uppercaseOptions.concat(lowercaseOptions, symbolOptions);
    console.log(choices);
  } else if (includeLower && includeUpper && includeNumbers) {
    choices = lowercaseOptions.concat(uppercaseOptions, numberOptions);
    console.log(choices);
  } else if (includeLower && includeUpper && includeSymbols) {
    choices = lowercaseOptions.concat(uppercaseOptions, symbolOptions);
    console.log(choices);
  } else if (includeLower && includeNumbers && includeSymbols) {
    choices = lowercaseOptions.concat(numberOptions, symbolOptions);
    console.log(choices);
  }
  //if patron chooses to include 2 selections
  else if (includeUpper && includeLower) {
    choices = uppercaseOptions.concat(lowercaseOptions);
    console.log(choices);
  } else if (includeUpper && includeNumbers) {
    choices = uppercaseOptions.concat(numberOptions);
    console.log(choices);
  } else if (includeUpper && includeSymbols) {
    choices = uppercaseOptions.concat(symbolOptions);
    console.log(choices);
  } else if (includeLower && includeNumbers) {
    choices = lowercaseOptions.concat(numberOptions);
    console.log(choices);
  } else if (includeLower && includeSymbols) {
    choices = lowercaseOptions.concat(symbolOptions);
    console.log(choices);
  } else if (includeNumbers && includeSymbols) {
    choices = numberOptions.concat(symbolOptions);
    console.log(choices);
  }
  //if patron chooses to include 1 selection
  else if (includeUpper) {
    choices = uppercaseOptions;
    console.log(choices);
  } else if (includeLower) {
    choices = lowercaseOptions;
    console.log(choices);
  } else if (includeNumbers) {
    choices = numberOptions;
    console.log(choices);
  } else if (includeSymbols) {
    choices = symbolOptions;
    console.log(choices);
  }

  let randomizedPassword = "";

  for (var i = 0; i < numCharacters; i++) {
    randomizedPassword =
      randomizedPassword + choices[Math.floor(Math.random() * choices.length)];
    console.log(randomizedPassword);
  }

  return randomizedPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
