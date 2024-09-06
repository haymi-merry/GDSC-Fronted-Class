let loginForm = document.getElementById("loginForm");
let userFullName = document.getElementById("fullName");
let userPassword = document.getElementById("password");
let submitMessage = document.getElementById("submitted");

loginForm.addEventListener("submit", function (gdsc) {
  // Prevent form submission
  gdsc.preventDefault();

  // initial colors  or styles of the input boxes
  userFullName.style.backgroundColor = "";
  userPassword.style.backgroundColor = "";

  // Check if fields are empty or not
  let isFormComplete = true;

  if (userFullName.value.length === 0) {
    alert("Please Fill Your Full Name");
    userFullName.style.backgroundColor = "pink";
    isFormComplete = false;
  }
  if (userPassword.value.length === 0) {
    alert("Your Pasword Is Empty");
    userPassword.style.backgroundColor = "pink";
    isFormComplete = false;
  }

  if (isFormComplete) {

    // Hide  all of the form
    loginForm.style.display = "none";

    // then Show the message form is submitted
    submitMessage.style.display = "block";
  }
});