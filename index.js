const form = document.getElementById("form");
const passlength = document.getElementById("length");

let password = "";
let passwordText = "";

var numbers = '0123456789'
const alphabetupper = "ABCDFGHIJKLMNOPQRSTUWXYZ";
var specialCharacters = '()${}@!*#%&'
const lowerCase = "abdcefghijklmnopqrsteuvxz";
const randNum = Math.floor(Math.random() * 10);


let len;

const handleSubmit = (e) => {
  e.preventDefault();
  len = Number(passlength.value);
  generatePassword();

};

const generatePassword = () => {
  if (document.getElementById("uppercase").checked) {
    password = password += alphabetupper;
  }

  if (document.getElementById("special").checked) {
    password = password += specialCharacters;
  }

  if (document.getElementById("lowercase").checked) {
    password = password += lowerCase;
  }

  if (document.getElementById("numbers").checked) {
    password = password += numbers;
  }

  // console.log(password);

  // // console.log(passwordText)

  for (var i = 0; i < len; i++) {
    var randomIndex = Math.floor(Math.random() * password.length);
    var randomCharacter = password[randomIndex];
    passwordText += randomCharacter;
  }


  var pass= document.querySelector("#password");
  pass. innerHTML= passwordText;
};



form.addEventListener("submit", handleSubmit);
