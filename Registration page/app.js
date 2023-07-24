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

// 0.setItem("userData", JSON.stringify("UsersData"));

let userinfo = [];

function RestoreData() {
  let StoredData = JSON.parse(localStorage.getItem("UsersData"));
  if (StoredData != null) {
    userinfo = StoredData;
  }
}
// let sub = document.getElementById("submit")
// sub.addEventListener("click", function transpert (event) {
//   event.preventDefault();
//   console.log('test');
//   window.location.href = "../Login Page/index.html"
// }

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
  else if (quiztype == 0) alert("Please Select quiz Type");
  else {
    event.preventDefault();
    window.location.href = "../Login Page/index.html";
  }
  localStorage.setItem("userData", JSON.stringify(userData));
}

function LocalStore(UserName, Email, Password) {
  RestoreData();
  userinfo.push(UserName);
  // userinfo.push(FirstName);
  userinfo.push(Email);
  userinfo.push(Password);
  let userinfoList = JSON.stringify(userinfo);
  localStorage.setItem("UsersData", userinfoList);
}
