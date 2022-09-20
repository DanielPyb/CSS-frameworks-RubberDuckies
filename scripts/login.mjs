// getting the fields for the register form and the register form
const registerForm = document.querySelector("#registerForm")
let registerPassword = document.querySelector("#registerPassword")
let registerEmail = document.querySelector("#registerEmail");
let registerUsername = document.querySelector("#registerName")

registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    registerUsername = registerUsername.value
    registerPassword = registerPassword.value;
    registerEmail = registerEmail.value;
    const userProfile = {
        name: registerUsername,
        email: registerEmail,
        password: registerPassword,
        avatar: "../img/avatar.jpg",
    }
    console.log(userProfile);
});


//toggle for login or register
const registerBox = document.querySelector("#registerBox")
const loginBox = document.querySelector("#loginBox")
const registerToggle = document.querySelector("#registerToggle")
const loginToggle = document.querySelector("#loginToggle")


registerToggle.addEventListener("click", () => {
    registerBox.style.display = "block";
    loginBox.style.display = "none";
})
loginToggle.addEventListener("click", () => {
    loginBox.style.display = "block";
    registerBox.style.display = "none";
})

// getting the fields in the login form
let email = document.querySelector("#email");
let password = document.querySelector("#password")
const loginForm = document.querySelector("#loginForm")

// function to login
loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    email = email.value;
    password = password.value;
    let existingUser = {
        email: email,
        password: password,
    }
    console.log(existingUser);
})