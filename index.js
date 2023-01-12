const form = document.getElementById("form");
const passlength = document.getElementById("length");
const passwordcontainer = document.getElementById("password-container");

let p = document.getElementById("p");
let password = "";
let passwordText = "";

let numbers = "0123456789";
const alphabetupper = "ABCDFGHIJKLMNOPQRSTUWXYZ";
let specialCharacters = "()${}@!*#%&";
const lowerCase = "abdcefghijklmnopqrsteuvxz";
const randNum = Math.floor(Math.random() * 10);

let btn;
let len;

const handleSubmit = (e) => {
  e.preventDefault();
  len = Number(passlength.value);
  generatePassword();
};

const generatePassword = () => {
  if (len < 4 || len > 32) {
    swal("The password needs to have between 4 and 32 characters 🙁");
  }
  if (
   !document.getElementById("uppercase").checked &&
    !document.getElementById("special").checked && 
    !document.getElementById("lowercase").checked && 
    !document.getElementById("numbers").checked

  ) {
    swal("You need to choose at least one criteria for a secure password 🙁");
    return;
  }
  if (len >= 4 || len > 32) {
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

    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * password.length);
      let randomCharacter = password[randomIndex];
      passwordText += randomCharacter;
    }

    p.innerHTML = passwordText;
    btn = document.createElement("button");
    btn.innerHTML = "Copy";
    passwordcontainer.classList.add("passwordContainer");

    passwordcontainer.appendChild(btn);
    btn.addEventListener("click", copyContent);
  }
};

const copyContent = async () => {
  console.log(p.innerHTML);
  try {
    await navigator.clipboard.writeText(p.innerHTML);
    swal("Copyed!📋 😊");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

form.addEventListener("submit", handleSubmit);
