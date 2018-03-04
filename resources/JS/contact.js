
    // variables
    let firstName = document.getElementById("first-name").value;
    let surname = document.getElementById("last-name").value;
    let email = document.getElementById("e-mail").value;
    let phoneNumber = document.getElementById("phone").value;
    let reason = document.getElementById("reason");
    let comment = document.getElementById("enquiry");
    let nameFail = document.getElementById("first-name-error");
    let surnameFail = document.getElementById("last-name-error");
    let emailFail = document.getElementById("email-error");
    let phoneFail = document.getElementById("phone-error");

    let emailreg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

    function validate () {
      if(firstName!="" && surname!="" && email!="" && phoneNumber!="")
      {
          if (email.match(emailreg)){

            if(firstName == " " || firstName != NaN){

                if (surname == " " || surname != NaN) {

                  if (phoneNumber == " " || phoneNumber == NaN) {

                  } else {
                    phoneNumber.style.border = "2px solid red";
                    phoneFail.style.display = "inline";
                    return false;
                  }

                } else {
                  surname.style.border = "2px solid red";
                  surnameFail.style.display = "inline";
                  return false;
                }


            } else {
              firstName.style.border = "2px solid red";
              nameFail.style.display = "inline";
              return false;
            }

          }
          else {
            email.style.border = "2px solid red";
            emailFail.style.display = "inline";
            return false;
          }
      }
      else {
        alert('Whoops!!');
        firstName.style.border = "2px solid red";
        nameFail.style.display = "inline";
        surname.style.border = "2px solid red";
        surnameFail.style.display = "inline";
        email.style.border = "2px solid red";
        emailFail.style.display = "inline";
        phoneNumber.style.border = "2px solid red";
        phoneFail.style.display = "inline";
        return false;
      }
    }


  /*
    //name validation
    function fname(){
      if (firstName == " " || firstName != NaN) {
      firstName.style.border = "2px solid red";
      nameFail.style.display = "inline";
      }
    }

    function lname(){
      if (surname == " " || surname != NaN) {
      surname.style.border = "2px solid red";
      surnameFail.style.display = "inline";
      }
    }

    //e-mail vaildation
    function mail(){
      if (email != emailreg) {
      email.style.border = "2px solid red";
      emailFail.style.display = "inline";
      }
    }

    // Phone validation
    function phone(){
      if (phoneNumber == " " || phoneNumber == NaN) {
      phoneNumber.style.border = "2px solid red";
      phoneFail.style.display = "inline";
      }
    }
*/
