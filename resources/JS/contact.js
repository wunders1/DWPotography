// variables
let firstName = document.getElementById("first-name");
let nameFail = document.getElementById("first-name-error");
let surname = document.getElementById("last-name");
let surnameFail = document.getElementById("last-name-error");
let email = document.getElementById("e-mail");
let emailFail = document.getElementById("email-error");
let phoneNumber = document.getElementById("phone");
let phoneFail = document.getElementById("phone-error");
let reason = document.getElementById("reason");
let reasonFail = document.getElementById("reason-error");
let comment = document.getElementById("enquiry");

//redular expressions
let emailreg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let phoneregm = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
let phonereg = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

// one click validation
function validate(){
if (firstName.value === "") {
  firstName.style.border = "2px solid red";
  nameFail.style.visibility = "visible";
 }
  else {
    firstName.style.border = "2px solid #eee";
    nameFail.style.visibility = "hidden";
  }
if (surname.value === "") {
  surname.style.border = "2px solid red";
  surnameFail.style.visibility = "visible";
  }
    else {
      surname.style.border = "2px solid #eee";
      surnameFail.style.visibility = "hidden";
    }
if (email.value.match(emailreg)) {
  email.style.border = "2px solid #eee";
  emailFail.style.visibility = "hidden";
  }
    else {
      email.style.border = "2px solid red";
      emailFail.style.visibility = "visible";
  }
if(phoneNumber.value.match(phoneregm) || phoneNumber.value.match(phonereg)) {
  phone.style.border = "2px solid #eee";
  phoneFail.style.visibility = "hidden";;
  }
  else {
    phone.style.border = "2px solid red";
    phoneFail.style.visibility = "visible";
    }
if(reason.value === "default"){
    reasonFail.style.visibility = "visible";
    }
    else {
    reasonFail.style.visibility = "hidden";
    }
}


/* test validation
//test first name validation
function fname(){
  if (firstName.value === "") {
  firstName.style.border = "2px solid red";
  nameFail.style.visibility = "visible";
  }
  else {
    firstName.style.border = "2px solid #eee";
    nameFail.style.visibility = "hidden";
  }
}

//test surname validation
function lname(){
  if (surname.value === "") {
  surname.style.border = "2px solid red";
  surnameFail.style.visibility = "visible";
  }
  else {
    surname.style.border = "2px solid #eee";
    surnameFail.style.visibility = "hidden";
  }
}

//test e-mail validation
function mail(){
if (email.value.match(emailreg)) {
  email.style.border = "2px solid #eee";
  emailFail.style.visibility = "hidden";
  }
    else {
      email.style.border = "2px solid red";
      emailFail.style.visibility = "visible";
  }
}

//test phone number validation
function number(){
if (phoneNumber.value.match(phoneregm) || phoneNumber.value.match(phonereg)) {
  phone.style.border = "2px solid #eee";
  phoneFail.style.visibility = "hidden";
  }
    else {
    phone.style.border = "2px solid red";
    phoneFail.style.visibility = "visible";
}
}

//test reason validation
function contact(){
  if(reason.value == "default"){
   reasonFail.style.visibility = "visible";
  }
  else {
    reasonFail.style.visibility = "hidden";
  }
}
*/
