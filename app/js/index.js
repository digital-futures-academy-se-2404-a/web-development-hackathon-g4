function checkTitle(title) {
  return title != "";
}

function nameIsOnlyLetters(name) {
  const re = /[a-zA-Z]/;
  return re.test(String(name).toLowerCase());
}

function nameIsValidLength(name) {
  return name.length < 16 && name.length > 0 && name.trim() != "";
}

function emailIsValid(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(re.test(String(email).toLowerCase()) && email.trim() != "");
  return re.test(String(email).toLowerCase()) && email.trim() != "";
}

function displayError(errorString) {
  const errorMessage = document.getElementById("error-message");

  errorMessage.innerHTML = errorString;
  errorMessage.style.color = "red";
  errorMessage.style.visibility = "visible";
}

function clearErrorMessage() {
  const errorMessage = document.getElementById("error-message");

  errorMessage.style.visibility = "hidden";
}

// Changing the title-select element for invalid input
document.getElementById("title-select").addEventListener("change", function (event) {
  const title = document.getElementById("title-select");
  
  if (!checkTitle(title.value)) {
    title.style.border = "2px red solid";
  }
});

// Changing the first-name-input element for invalid input
document.getElementById("first-name-input").addEventListener("change", function (event) {
  const firstName = document.getElementById("first-name-input");
  
  if (!nameIsOnlyLetters(firstName.value)) {
    firstName.style.border = "2px red solid";
    displayError("Only lower and upper case letters are allowed");
  }

  if (!nameIsValidLength(firstName.value)) {
    displayError("The first name entered is either too short or too long.");
  }

  if (nameIsValidLength(firstName.value) && nameIsOnlyLetters(firstName.value)) {
    firstName.style.border = "1px gray solid";
    clearErrorMessage();
  }
});

// Changing the last-name-input element for invalid input
document.getElementById("last-name-input").addEventListener("change", function (event) {
  const lastName = document.getElementById("last-name-input");
  
  if (!nameIsOnlyLetters(lastName.value)) {
    lastName.style.border = "2px red solid";
    displayError("Only lower and upper case letters are allowed");
  }

  if (!nameIsValidLength(lastName.value)) {
    lastName.style.border = "2px red solid";
    displayError("The last name entered is either too short or too long.");
  }

  if (nameIsValidLength(lastName.value) && nameIsOnlyLetters(lastName.value)) {
    lastName.style.border = "1px gray solid";
    clearErrorMessage();
  }
});

// Changing the email-input element for invalid input
document.getElementById("email-input").addEventListener("input", function (event) {
  const email = document.getElementById("email-input");

  if (!emailIsValid(email.value)) {
    email.style.border = "2px red solid";
    displayError("Email address not valid.");
  } else {
    email.style.border = "1px gray solid";
    clearErrorMessage();
  }
});

document.getElementById("sign-up-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = [];
  
  let firstName = document.getElementById("first-name-input").value;
  let lastName = document.getElementById("last-name-input").value;
  let email = document.getElementById("email-input").value;

  if (title === "") {
    errors.push("Title is required.");
  }

  if (!nameIsOnlyLetters(firstName) && !nameIsValidLength(lastName)) {
    errors.push("Invalid first name.")
  }

  if (!nameIsOnlyLetters(lastName) && !nameIsValidLength(lastName)) {
    errors.push("Invalid last name.");
  }

  if (!emailIsValid(email)) {
    errors.push("Email address not valid.");
  }

  if (errors.length != 0) {
    const errorMsg = errors.join("\n");
    alert(errorMsg);
  }
});
