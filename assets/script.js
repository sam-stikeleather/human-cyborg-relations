var form = document.getElementById("form");
var firstNameEl = document.querySelector("#first-name");
var lastNameEl = document.querySelector("#last-name");
var emailEl = document.querySelector("#email");
var passwordEl = document.querySelector("#password");


function handleFormSubmit(event) {
    event.preventDefault();

    var firstname = firstNameEl.value;
    console.log("first-name " + firstname);
    var lastname = lastNameEl.value;
    console.log("last-name " + lastname)
    var email = emailEl.value;
    console.log("email" + email);
    var password = passwordEl.value;
    console.log("password " + password);
}

form.addEventListener("submit", handleFormSubmit);
