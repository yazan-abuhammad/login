let a = document.getElementById("btn")
let b = document.getElementById("move")
a.onclick = function () {
    b.click();
}
let uname = document.querySelector("#name")
let exam = document.querySelector("#job")

let datasaved = JSON.parse(localStorage.getItem("userData"));
let job = JSON.parse(localStorage.getItem("userData"))
// console.log(datasaved.Username);
uname.append(datasaved.Username)
// exam.append(datasaved.)
// function data() {
//     let datasaved = JSON.parse(localStorage.getItem("userData"));
//     console.log(datasaved.Username);
//     if (datasaved !== null) {
//     console.log('ffired'); 
//       userinfo = datasaved;
//     }
//   }
  
  // function getname() {
  //   data();
  //   let userData = JSON.parse(localStorage.getItem("userData"));
  //   if (userData !== null) {
  //     let firstName = userData.UserName;
  //     console.log("First Name:", firstName); 
  //   }
  // }
  
  
  // getname();
