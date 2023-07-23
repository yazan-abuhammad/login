function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let Data = JSON.parse(localStorage.getItem("userData"));

  if (Data) {
    if (email === Data.Email && password === Data.Password) {
      alert("done");
      return true;
    } else {
      alert("Invalid email or password.");
      return false;
    }
  } else {
    alert("No user data found. Please register first.");
    return false;
  }
}

// login btn navgate to homepage

let buttonlogin = document.querySelector("#loginbtn");
buttonlogin.addEventListener("click", (e) => {
  if (!login()) {
  } else {
    console.log(`clicked`);
  }
});

let buttonlogin2 = document.querySelector("#btnlogin");
buttonlogin2.addEventListener("click", () => buttonlogin.click());
