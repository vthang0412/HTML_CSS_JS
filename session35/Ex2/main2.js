const bookMark = JSON.parse(localStorage.getItem("bookMark")) || [];

const btn = document.getElementById("addBook");
const popup = document.getElementById("main");
const close = document.getElementById("exit");
const content = document.getElementById("content");
const submit = document.getElementById("Save");
const nameInput = document.getElementById("websiteName");
const urlInput = document.getElementById("websiteURL");

// Hiển thị form thêm bookmark
btn.addEventListener("click", () => {
    popup.style.display = "block";
});

// Đóng form thêm bookmark
close.addEventListener("click", () => {
    popup.style.display = "none";
});

// Lưu bookmark
submit.addEventListener("click", () => {
    const nameWebsite = nameInput.value.trim();
    const urlWebsite = urlInput.value.trim();

    if (!nameWebsite || !urlWebsite) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const newBookMark = {
        id: bookMark.length + 1,
        name: nameWebsite,
        url: urlWebsite,
    };

    bookMark.push(newBookMark);
    saveLocalStorage(bookMark);
    render();
    popup.style.display = "none";
    nameInput.value = "";
    urlInput.value = "";
});

// Lưu vào localStorage
function saveLocalStorage(data) {
    localStorage.setItem("bookMark", JSON.stringify(data));
}

// Hiển thị danh sách bookmark
function render() {
    content.innerHTML = "";
    bookMark.forEach((bookmark) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="https://www.google.com/s2/favicons?domain=${bookmark.url}" alt="favicon">
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
            <button onclick="deleteBookmark(${bookmark.id})">X</button>
        `;
        content.appendChild(div);
    });
}

// Xóa bookmark
function deleteBookmark(id) {
    const index = bookMark.findIndex((bookmark) => bookmark.id === id);
    if (index !== -1) {
        bookMark.splice(index, 1);
        saveLocalStorage(bookMark);
        render();
    }
}

// Hiển thị bookmark khi tải trang
render();