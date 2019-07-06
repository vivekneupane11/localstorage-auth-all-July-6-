let correctEmail = false;
let correctName = false;
let correctPassword = false;
let correctContact = false;

let DOMSTRINGS = (function() {
    let username = document.getElementById('username-input');
    let email = document.getElementById('email-input');
    let password = document.getElementById('password-input');
    let cpassword = document.getElementById('cpassword-input');
    let contact = document.getElementById('contact-input');
    let job = document.getElementById('job-input');
    let gender = document.getElementById('gender-input');
    let usericon = document.getElementById('usericon');
    let emailicon = document.getElementById('emailicon');
    let passwordicon = document.getElementById('passwordicon');
    let cpasswordicon = document.getElementById('cpasswordicon');
    let contacticon = document.getElementById('contacticon');
    let signupbutton = document.getElementById('signup-button');
    let usernameError = document.getElementById('username-error');
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');
    let contactError = document.getElementById('contact-error');

    return {
        domusername: username,
        domemail: email,
        dompassword: password,
        domcpassword: cpassword,
        domcontact: contact,
        domjob: job,
        domgender: gender,
        domusericon: usericon,
        domemailicon: emailicon,
        dompasswordicon: passwordicon,
        domcpasswordicon: cpasswordicon,
        domcontacticon: contacticon,
        domsignupbutton: signupbutton,
        //return errors
        domErrorcontact: contactError,
        domErrorusername: usernameError,
        domErroremail: emailError,
        domErrorpassword: passwordError
    }
})();






//username input EventListener
DOMSTRINGS.domusername.addEventListener('input', function() {

    if (DOMSTRINGS.domusername.value === "") {
        DOMSTRINGS.domErrorusername.style.display = "block";
        DOMSTRINGS.domusericon.style.color = "red";
        DOMSTRINGS.domusername.style.border = "1px solid red";
    } else {
        DOMSTRINGS.domErrorusername.style.display = "none";
        DOMSTRINGS.domusericon.style.color = "rgb(255, 182, 6)";
        DOMSTRINGS.domusername.style.border = " 0.2px solid rgb(255, 182, 6)";
        correctName = true;
        buttonAuthChecker();

    }

});
console.log(correctName);
DOMSTRINGS.domemail.addEventListener('input', function() {
    let regEmail = /^[a-zA-Z0-9]+@(gmail|facebook|yahoo)\.com/;
    let isEmail = regEmail.test(DOMSTRINGS.domemail.value);
    if (!isEmail) {
        DOMSTRINGS.domErroremail.style.display = "block";
        DOMSTRINGS.domemailicon.style.color = "red";
        DOMSTRINGS.domemail.style.border = "1px solid red";
    } else {
        DOMSTRINGS.domErroremail.style.display = "none";
        DOMSTRINGS.domemailicon.style.color = "rgb(255, 182, 6)";
        DOMSTRINGS.domemail.style.border = " 0.2px solid rgb(255, 182, 6)";
        correctEmail = true;
        buttonAuthChecker();
    }
});

DOMSTRINGS.dompassword.addEventListener('input', function() {

    if (DOMSTRINGS.dompassword.value === "") {
        DOMSTRINGS.domErrorpassword.style.display = "block";
        DOMSTRINGS.dompasswordicon.style.color = "red";
        DOMSTRINGS.domcpasswordicon.style.color = "red";
        DOMSTRINGS.dompassword.style.border = "1px solid red";
        DOMSTRINGS.domcpassword.style.border = "1px solid red";
    } else if (DOMSTRINGS.domcpassword.value != DOMSTRINGS.dompassword.value) {
        DOMSTRINGS.domErrorpassword.style.display = "block";
        DOMSTRINGS.dompasswordicon.style.color = "red";
        DOMSTRINGS.domcpasswordicon.style.color = "red";
        DOMSTRINGS.dompassword.style.border = "1px solid red";
        DOMSTRINGS.domcpassword.style.border = "1px solid red";
    } else {
        DOMSTRINGS.domErrorpassword.style.display = "none";
        DOMSTRINGS.dompasswordicon.style.color = " rgb(255, 182, 6)";
        DOMSTRINGS.domcpasswordicon.style.color = " rgb(255, 182, 6)";
        DOMSTRINGS.dompassword.style.border = " 0.2px solid rgb(255, 182, 6)";
        DOMSTRINGS.domcpassword.style.border = " 0.2px solid rgb(255, 182, 6)";
        correctPassword = true;
        buttonAuthChecker();
    }
});
DOMSTRINGS.domcpassword.addEventListener('input', function() {

    if (DOMSTRINGS.domcpassword.value === "") {
        DOMSTRINGS.domErrorpassword.style.display = "block";
        DOMSTRINGS.dompasswordicon.style.color = "red";
        DOMSTRINGS.domcpasswordicon.style.color = "red";
        DOMSTRINGS.dompassword.style.border = "1px solid red";
        DOMSTRINGS.domcpassword.style.border = "1px solid red";
    } else if (DOMSTRINGS.domcpassword.value != DOMSTRINGS.dompassword.value) {
        DOMSTRINGS.domErrorpassword.style.display = "block";
        DOMSTRINGS.dompasswordicon.style.color = "red";
        DOMSTRINGS.domcpasswordicon.style.color = "red";
        DOMSTRINGS.dompassword.style.border = "1px solid red";
        DOMSTRINGS.domcpassword.style.border = "1px solid red";
    } else {
        DOMSTRINGS.domErrorpassword.style.display = "none";
        DOMSTRINGS.dompasswordicon.style.color = " rgb(255, 182, 6)";
        DOMSTRINGS.domcpasswordicon.style.color = " rgb(255, 182, 6)";
        DOMSTRINGS.dompassword.style.border = " 0.2px solid rgb(255, 182, 6)";
        DOMSTRINGS.domcpassword.style.border = " 0.2px solid rgb(255, 182, 6)";
        correctPassword = true;
        buttonAuthChecker();
    }
});
DOMSTRINGS.domcontact.addEventListener('input', function() {
    let contact = /\d{10}/;
    let isContact = contact.test(DOMSTRINGS.domcontact.value);

    if (DOMSTRINGS.domcontact.value === "") {
        DOMSTRINGS.domErrorcontact.style.display = "block";
        DOMSTRINGS.domcontacticon.style.color = "red";
        DOMSTRINGS.domcontact.style.border = "1px solid red";
    } else if (!isContact) {
        DOMSTRINGS.domErrorcontact.style.display = "block";
        DOMSTRINGS.domcontacticon.style.color = "red";
        DOMSTRINGS.domcontact.style.border = "1px solid red";
    } else {
        DOMSTRINGS.domErrorcontact.style.display = "none";
        DOMSTRINGS.domcontacticon.style.color = "rgb(255, 182, 6)";
        DOMSTRINGS.domcontact.style.border = " 0.2px solid rgb(255, 182, 6)";
        correctContact = true;
        buttonAuthChecker();
    }
});

function buttonAuthChecker() {
    if (correctContact && correctEmail && correctName && correctPassword) {
        DOMSTRINGS.domsignupbutton.style.cursor = "pointer";
        DOMSTRINGS.domsignupbutton.removeAttribute("disabled");
    }
}


//Author Vivek Neupane