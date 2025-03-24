const coures = [
    {
        id: 1,
        content: "Learn Javascript Session 01",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bách",
    },
    {
        id: 2,
        content: "Learn Javascript Session 2",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Lâm th",
    },
    {
        id: 3,
        content: "Learn CSS Session 1",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Cí ớt ớt",
    },
];

let tbody = document.getElementById("taskTable");
let btn = document.getElementsByClassName("btn")[0];
display();
btn.addEventListener("click", function () {
    let content = document.getElementById("content").value;
    let date = document.getElementById("dueDate").value;
    let select = document.getElementById("status").value;
    let user = document.getElementById("username").value;
    let task = {
        id: coures.length + 1,
        content: content,
        dueDate: date,
        status: select,
        assignedTo: user,
    };
    coures.push(task);
    saveToLocalStorage();
    display();
});

function display() {
    tbody.innerHTML = "";
    for (let i of coures) {
        let newtask = `
          <tr>
              <td>${i.id}</td>
              <td>${i.content}</td>
              <td>${i.dueDate}</td>
              <td>${i.status}</td>
              <td>${i.assignedTo}</td>
              <td>
                <button class="fix" data-id ="${i.id}">Sửa</button>
                <button class="delete" data-id ="${i.id}">Xóa</button>
              </td>
          </tr>
      `;
        tbody.innerHTML += newtask;

        let dlt = document.getElementsByClassName("delete");
        for (let i in dlt) {
            dlt[i].onclick = function () {
                let id = dlt[i].getAttribute("data-id");
                console.log(id);
                let couresIndex = coures.findIndex(
                    (element, index) => element.id === +id
                );
                coures.splice(couresIndex, 1);
                saveToLocalStorage();
                display();
            };
        }
        let fix = document.getElementsByClassName("fix");
        for (let i in fix) {
            fix[i].onclick = function () {
                let id = fix[i].getAttribute("data-id");
                let couresIndex = coures.findIndex(
                    (element, index) => element.id === +id
                );
                coures[couresIndex].content = prompt("Nhập content mới: ");
                coures[couresIndex].dueDate = prompt("Nhập thời gian (2006-04-09): ");
                coures[couresIndex].status = prompt("Nhập Status(Pending/Complate):  ");
                coures[couresIndex].assignedTo = prompt("Nhập tên mới:  ");
                saveToLocalStorage();
                display();
            };
        }
    }
}
function saveToLocalStorage() {
    localStorage.setItem("coures", JSON.stringify(coures));
}