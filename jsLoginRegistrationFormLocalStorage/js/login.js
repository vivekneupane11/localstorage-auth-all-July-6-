let login = document.getElementById('login');
let loginbutton = document.getElementById('login-button');
let register = document.getElementById('register');
let loginpage = document.getElementById('login-place');
let formleft = document.getElementById('form-left');
let formright = document.getElementById('form-right');
let loginemailinput = document.getElementById('loginemail-input');
let loginpasswordinput = document.getElementById('loginpassword-input');
let loginemailicon = document.getElementById('loginemailicon');
let loginpasswordicon = document.getElementById('loginpasswordicon');
let loginemailerror = document.getElementById('loginemail-error');
let loginpassworderror = document.getElementById('loginpassword-error');
let eyeOpener = document.getElementById('eyeOpener');
let isAuthenticated = 0;
let correctloginEmail = false;
let correctloginPassword = false;
login.addEventListener('click', function() {
    formleft.style.display = "none";
    formright.style.display = "none";
    formleft.style.transition = "all 1s ease ";
    formright.style.transition = "all 1s ease";
    loginpage.style.visibility = "visible";
    loginpage.style.marginTop = "120px";
    loginpage.style.transition = "all 1s ease";
    login.style.color = "yellow";
    register.style.color = "white";
});

register.addEventListener('click', function(e) {
    e.preventDefault();
    register.style.color = "yellow";
    loginpage.style.visibility = "hidden";
    formleft.style.display = "block";
    formright.style.display = "block";

    loginpage.style.marginTop = "-120px";
    loginpage.style.transition = "all 0.05s ease";
    formleft.style.transition = "all 1s ease ";
    formright.style.transition = "all 1s ease";
    login.style.color = "white";
    window.location.href = "./index.html";
});

loginemailinput.addEventListener('input', function() {
    let regEmail = /^[a-zA-Z0-9]+@(gmail|facebook|yahoo)\.com/;
    let isEmail = regEmail.test(loginemailinput.value);
    if (!isEmail) {
        loginemailerror.style.display = "block";
        loginemailicon.style.color = "red";
        loginemailinput.style.border = "1px solid red";
        correctloginEmail = false;
    } else {
        loginemailerror.style.display = "none";
        loginemailicon.style.color = "rgb(255, 182, 6)";
        loginemailinput.style.border = " 0.2px solid rgb(255, 182, 6)";
        correctloginEmail = true;
        loginValidation();
    }
});

loginpasswordinput.addEventListener('input', function() {
    if (loginpasswordinput.value === "") {
        loginpassworderror.style.display = "block";
        loginpasswordicon.style.color = "red";
        loginpasswordinput.style.border = "1px solid red";
        correctloginPassword = false;
    } else {
        loginpassworderror.style.display = "none";
        loginpasswordicon.style.color = "rgb(255, 182, 6)";
        loginpasswordinput.style.border = " 0.2px solid rgb(255, 182, 6)";
        correctloginPassword = true;
        loginValidation();
    }
});
eyeOpener.addEventListener('click', function() {

    if (loginpasswordinput.type == "text") {
        loginpasswordinput.type = "password";
        eyeOpener.style.color = "black";
    } else {
        loginpasswordinput.type = "text";
        eyeOpener.style.color = "rgb(255, 182, 6)";
    }



});

function loginValidation() {
    if (correctloginEmail && correctloginPassword) {
        loginbutton.removeAttribute('disabled');
        loginbutton.style.cursor = "pointer";
    } else {
        loginbutton.disabled = true;


    }

}
// Login local Storage
let totalstudents = [];
loginbutton.addEventListener('click', function(e) {
    e.preventDefault();
    let x = 0;
    let count = localStorage.length;
    for (x = 0; x < count; x++) {
        totalstudents[x] = JSON.parse(localStorage.getItem('student' + x));
    }
    let userEmail = loginemailinput.value;
    let userPassword = md5(loginpasswordinput.value);
    totalstudents.forEach(function(data) {

        if (userEmail == data.email && userPassword == data.password) {
            isAuthenticated = 1;
            sessionStorage.setItem("Email", userEmail);
            sessionStorage.setItem("Name", data.name);
            sessionStorage.setItem("Contact", data.contact);
            sessionStorage.setItem("Profession", data.job);
            sessionStorage.setItem("Role", data.role);
            window.location.href = "./pages/profile.html";

        } else {
            document.getElementById('welcome').innerHTML = "Invalid.Please Register";
            document.getElementById('welcome').style.color = "red";
        }
    });


});



//Author:Vivek Neupane