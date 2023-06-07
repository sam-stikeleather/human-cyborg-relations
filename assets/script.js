
var form = document.querySelector("#form");
var firstNameEl = document.querySelector("#first-name");
var lastNameEl = document.querySelector("#last-name");
var emailEl = document.querySelector("#email");
var passwordEl = document.querySelector("#password");
var ulEl = document.querySelector("#names");

var firstNameDisplay = document.createElement("li");


function handleFormSubmit(event) {
    event.preventDefault();

    var firstName = firstNameEl.value;
    console.log("first-name: " + firstname);

    var lastName = lastNameEl.value;
    console.log("last-name: " + lastname);

    var email = emailEl.value;
    console.log("email: " + email);

    var password = passwordEl.value;
    console.log("password: " + password);

    firstNameDisplay.textcontent = firstName;
    ulEl.appendChild(firstNameDisplay);

    




}

form.addEventListener("submit", handleFormSubmit);
