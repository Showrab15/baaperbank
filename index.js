// step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){

// step-2: get the email address inside the email input field
// always remember to use .value to get text from an input box
const emailField = document.getElementById('user-email');
const email = emailField.value;
// step-3 get password
// set id on the html element
// 3.b: get the element
// 3.c: get the value from element

const passwordField = document.getElementById('user-password');
const password = passwordField.value;

// DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
// step-4: verify email and password and check whether valid user or not
if(email === "sakib@gmail.com" && password === 'secret'){
window.location.href = 'banks.html'}
else{
    alert('tui password vule gesos toke ami tejjo sontan goshona korlam ')
}
})