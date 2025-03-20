let todoList = [
    {
        id: 1,
        task: "Hit the gym",
        completed: false,
    },
    {
        id: 2,
        task: "Pay Bills",
        completed: true,
    },
    {
        id: 3,
        task: "Meet George",
        completed: false,
    },
    {
        id: 4,
        task: "Buy eggs",
        completed: false,
    },
    {
        id: 5,
        task: "Read a book",
        completed: false,
    },
    {
        id: 6,
        task: "Organize office",
        completed: false,
    },
];

let ul = document.getElementById("myUL");
let addBtn = document.getElementsByClassName("addBtn")[0];
let input = document.getElementById("myInput");

// Ánh xạ toàn bộ đối tượng dữ liệu thành các phần tử HTML xuất hiện trên trang web
// R-read
// Render

// - B2.1: Duyệt qua mảng todoList
displayTodo();
// - B2.4: Mỗi khi 1 đối tượng dữ liệu được --> HTML
// Đưa phần tử HTML xuất hiện ở trong trang web (trên trình duyệt)

// C - Create
// Tính năng thêm mới

// B1: Xác định vị trí gắn sự kiện dành cho tính
// năng create --> nút add

// B2: Gắn sự kiện onclick cho nút add
addBtn.onclick = function () {
    input.value;
    let newtodo = {
        id: Math.random(),
        task: input.value,
        completed: false,
    };
    todoList.push(newtodo);
    displayTodo();
};

// B3:
// Mỗi khi người dùng bấm vào nút add thì
// Gọi thẻ input và lấy nội dung bên trong đó ra

// B4:
// Biến nội dung đó thành các phần tử li

// B5:
// Đưa thẻ li đó xuất hiện ở trên trình duyệt (trang web)



function displayTodo() {
    ul.innerHTML = "";
    for (let i in todoList) {
        // - B2.2: Lấy ra toàn bộ đối tượng todo-item{} nằm trong todoList
        let li;
        if (todoList[i].completed === true) {
            li = `<li class="checked" id="remove">
            ${todoList[i].task}
            <span class="close">&#x2715;</span>
            </li>`;
        } else {
            li = `<li id="remove">
            ${todoList[i].task}
            <span class="close">&#x2715;</span>
            </li>`;
        }
        // - B2.3: Chuyển đổi (Ánh xạ) từng đối tượng dữ liệu -->
        // CÁC PHẦN TỬ HTML
        ul.innerHTML = ul.innerHTML + li;
    }
    // Vị trí toàn bộ nút close đc sinh raaaaaaaaaaaaaaaaaaaaaaaaaaa
    let closeList = document.getElementsByClassName("close");
    console.log(closeList);

    for (let i in closeList){
        closeList[i].onclick = function(){
            let id = +closeList[i].parentElement.id;

            let findIndex = -1;
            for(let index in todoList){
                if(id === todoList[index].id){
                    findIndex = index;
                    break;
                }
            }

        todoList.splice(findIndex,1);
        displayTodo();
        }
    }
}

