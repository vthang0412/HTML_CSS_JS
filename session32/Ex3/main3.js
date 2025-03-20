let btn = document.getElementById("add");
btn.addEventListener("click", function (event) {
  event.preventDefault();

  let value = document.getElementById("subject-input").value;
  if (value === "") {
    alert("Tên môn học không được để trống");
  } else {
    let parent = document.getElementById("subject-list");
    let add = `
  <li>${value}</li>
  `;
    parent.innerHTML += add;
    document.getElementById("subject-input").value = "";
  }
});