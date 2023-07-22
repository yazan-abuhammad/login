const registerForm = document.getElementById("registerForm");
// const firstName = document.querySelector("#first-Name");
// const secondName = document.querySelector("#second-Name");
// const username = document.querySelector("#Username");
// const email = document.querySelector("#Email");
// const phoneNumber = document.querySelector("#Phone-Number");
// const confirmoEmail = document.querySelector("#confirm-your-email");
// const password = document.querySelector("#Password");
// const confirmPassword = document.querySelector("#Confirm-Password");

// let userData = {
//   FirstName: firstName,
//   SecondName: secondName,
//   Username: username,
//   Email: email,
//   PhoneNumber: phoneNumber,
//   ConfirmoEmail: confirmoEmail,
//   Password: password,
//   ConfirmPassword: confirmPassword,
// };

// localStorage.setItem("userData", JSON.stringify("UsersData"));

let userinfo = [];

function RestoreData() {
  let StoredData = JSON.parse(localStorage.getItem("UsersData"));
  if (StoredData != null) {
    userinfo = StoredData;
  }
}

function transpert() {
  // document.getElementById('submit').style.display="none";
  // document.getElementById("subdiv").style.display="block";
  window.location = "../Login Page/index.html";
}

registerForm.addEventListener("submit", validation);
function validation(event) {
  event.preventDefault();
  let username = event.target.username.value;
  let email = event.target.email.value;
  let confirmoEmail = event.target.confirmoEmail.value;
  let password = event.target.password.value;
  let confirmPassword = event.target.confirmPassword.value;
  let select = document.getElementById("select-qiz").value;

  let pwd_expression =
    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  let letters = /[A-Za-z]+$/;
  let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (username == "") alert("User name required");
  else if (!letters.test(username))
    alert("User name should only have alphapatic letters");
  else if (!filter.test(email))
    alert("Email should be like this example@example.com");
  else if (confirmoEmail != email) alert("Email Don't match");
  else if (password == "") alert("Password is required");
  else if (!pwd_expression.test(password))
    alert(
      "Password must contain capital and small letters,numbers and a symbol"
    );
  else if (password.length < 8 || password.length > 32)
    alert("Password must be 8 charechter minimum and maximum 32");
  else if (confirmPassword != password)
    alert("The two passwords doesn't match");
  else if (select == 0) alert("Please Select quiz Type");
  else {
    LocalStore(username, email, password);
    transpert();
  }
}

function LocalStore(UserName, Email, Password) {
  RestoreData();
  userinfo.push(UserName);
  userinfo.push(Email);
  userinfo.push(Password);
  let userinfoList = JSON.stringify(userinfo);
  localStorage.setItem("UsersData", userinfoList);
}

///////////////////////////////exam selector///////////////////////////
//////////////////////////////////////////////////////////////////////
