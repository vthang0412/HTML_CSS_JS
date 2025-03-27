let userName = JSON.parse(localStorage.getItem("userName")) || [];
let save = document.getElementsByClassName("save")[0]; 
let infor = document.getElementsByClassName("infor")[0]; 
let header = document.querySelector(".header"); 

save.addEventListener("click", function () {
    let input = document.getElementById("name"); 
    if (input.value.trim().length === 0) {
        alert("Không được để trống tên"); 
    } else {
        let newName = {
            id: userName.length + 1, 
            name: input.value.trim(), 
        };
        userName = [newName]; 
        input.value = ""; 
        saveLocal(userName); 
        render(); 
        header.style.display = "none"; 
    }
});

function render() {
    infor.innerHTML = ""; 
    for (let i of userName) {
        let user = `
        <div class="content_infor">
          <h3>👋 Chào bạn, ${i.name}!</h3>
          <button class="newName" data-id="${i.id}">Đổi Tên</button>
        </div>
        `;
        infor.innerHTML += user; 
    }
}

    let newName = document.getElementsByClassName("newName");
    for (let i in newName) {
        newName[i].onclick = function () {
            let id = newName[i].getAttribute("data-id"); 
            let index = userName.findIndex((element) => element.id === +id); 
            let input = document.getElementById("name");
            input.value = userName[index].name; 
            userName.splice(index, 1);
            saveLocal(userName); 
            header.style.display = "block"; 
            infor.innerHTML = ""; 
        };
    }

function saveLocal(userName) {
    localStorage.setItem("userName", JSON.stringify(userName));
}

if (userName.length > 0) {
    render();
    header.style.display = "none";
}