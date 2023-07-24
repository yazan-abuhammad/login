let buttonlogin = document.getElementById("longin");

buttonlogin.addEventListener("click", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let Data = JSON.parse(localStorage.getItem("userData"));
  if (Data) {
    if (email === Data.Email && password === Data.Password) {
      console.log("ok");

      window.location.href = "../qiz/index.html";
      return true;
    } else {
      alert("Invalid email or password.");
      return false;
    }
  } else {
    alert("No user data found. Please register first.");
    return false;
  }
});
