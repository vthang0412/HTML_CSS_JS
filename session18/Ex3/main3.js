let userName = prompt("Login:");

if (userName === "ADMIN") {
  let password = prompt("Password");

  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === null) {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (userName === null) {
  alert("Cancelled");
} else {
  alert("I don't know you");
}
