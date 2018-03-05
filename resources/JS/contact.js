
    // variables
    let firstName = document.getElementById("first-name");
    let nameFail = document.getElementById("first-name-error");
    let surname = document.getElementById("last-name");
    let surnameFail = document.getElementById("last-name-error");
    let email = document.getElementById("e-mail");
    let emailFail = document.getElementById("email-error");
    let phoneNumber = document.getElementById("phoneNo");
    let phoneFail = document.getElementById("phone-error");
    let reason = document.getElementById("reason");
    let comment = document.getElementById("enquiry");

    let emailreg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
    let phoneregm = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    let phonereg = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;



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
