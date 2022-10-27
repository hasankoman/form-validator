const message = document.querySelector(".message-container h2");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("#form");
const passwords = [password, confirmPassword];

let isValid = true;
let passwordsIsValid = true;

const wrongSetup = () => {
  message.parentElement.style.outlineColor = "red";
  message.style.color = "red";
  confirmPassword.style.border = "1px solid red";
  confirmPassword.style.backgroundColor = "rgba(255, 219, 219, 0.22)";
  password.style.border = "1px solid red";
  password.style.backgroundColor = "rgba(255, 219, 219, 0.22)";
};

const validateForm = () => {
  passwordsIsValid = confirmPassword.value == password.value;
  isValid = form.checkValidity();
  console.log(isValid);

  if (!passwordsIsValid) {
    message.textContent = "Make sure passwords match.";
    wrongSetup();
    return;
  }
  if (isValid && passwordsIsValid) {
    // Style main message for success
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    message.parentElement.style.outlineColor = "green";
  }
};

const storeFormData = () => {
  let user = {
    name: form.name.value,
    phone: form.number.value,
    email: form.email.value,
    url: form.url.value,
    password: form.password.value,
  };
  console.log(user);
};

const processFormData = (e) => {
  e.preventDefault();
  validateForm();
  if (isValid && passwordsIsValid) {
    storeFormData();
  }
};

form.addEventListener("submit", processFormData);

passwords.forEach((item) => {
  item.addEventListener("input", () => {
    console.log(password.checkValidity());
    if (password.checkValidity()) {
      if (confirmPassword.value == password.value) {
        confirmPassword.style.border = "1px solid green";
        confirmPassword.style.background = "rgba(213, 255, 213, 0.25)";
        password.style.border = "1px solid green";
        password.style.background = "rgba(213, 255, 213, 0.25)";
        passwordsIsValid = true;
      } else {
        password.style.border = "1px solid red";
        password.style.background = "rgba(255, 219, 219, 0.22)";
        confirmPassword.style.border = "1px solid red";
        confirmPassword.style.background = "rgba(255, 219, 219, 0.22)";
        passwordsIsValid = false;
      }
    } else {
      password.style.background = "rgba(255, 219, 219, 0.22)";
      confirmPassword.style.border = "1px solid red";
      confirmPassword.style.border = "1px solid red";
      confirmPassword.style.background = "rgba(255, 219, 219, 0.22)";
      passwordsIsValid = false;
    }
  });
});
