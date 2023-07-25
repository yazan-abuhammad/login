let emailtex = document.querySelector("#emailtex");
let confirmemailtex = document.querySelector("#confirmemailtex");
let Passwordtex = document.querySelector("#Passwordtex");
let ConfirmPasswordtex = document.querySelector("#ConfirmPasswordtex");
let quiztypetex = document.querySelector("#quiztypetex");
let userinfo = [];

function RestoreData() {
  let StoredData = JSON.parse(localStorage.getItem("UsersData"));
  if (StoredData != null) {
    userinfo = StoredData;
  }
}
function validation(event) {
  let registerForm = document.getElementById("registerForm").value;
  let firstName = document.querySelector("#first-Name").value;
  let secondName = document.querySelector("#second-Name").value;
  let username = document.querySelector("#Username").value;
  let email = document.querySelector("#Email").value;
  let phoneNumber = document.querySelector("#Phone-Number").value;
  let confirmoEmail = document.querySelector("#confirm-your-email").value;
  let password = document.querySelector("#Password").value;
  let confirmPassword = document.querySelector("#Confirm-Password").value;
  let quiztype = document.getElementById("quiztype").value;

  let userData = {
    FirstName: firstName,
    SecondName: secondName,
    Username: username,
    Email: email,
    PhoneNumber: phoneNumber,
    ConfirmoEmail: confirmoEmail,
    Password: password,
    ConfirmPassword: confirmPassword,
    quiztype: quiztype,
  };

  let pwd_expression =
    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  let letters = /[A-Za-z]+$/;
  let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (username == "") alert("User name required");
  else if (!filter.test(email)) {
    emailtex.classList.remove("hide");
    event.preventDefault();
  } else if (confirmoEmail != email) {
    confirmemailtexclassList.remove("hide");
    event.preventDefault();
  } else if (!pwd_expression.test(password)) {
    Passwordtex.classList.remove("hide");
    event.preventDefault();
  } else if (confirmPassword != password) {
    ConfirmPasswordtex.classList.remove("hide");
    event.preventDefault();
  } else if (quiztype == 0) {
    quiztypetex.classList.remove("hide");
    event.preventDefault();
  } else {
    window.location.href = "../Login Page/index.html";
  }
  localStorage.setItem("userData", JSON.stringify(userData));
}

function LocalStore(UserName, Email, Password) {
  RestoreData();
  userinfo.push(UserName);
  userinfo.push(Email);
  userinfo.push(Password);
  let userinfoList = JSON.stringify(userinfo);
  localStorage.setItem("UsersData", userinfoList);
}
