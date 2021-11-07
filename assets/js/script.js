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
}
