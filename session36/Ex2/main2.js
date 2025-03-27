let foods = JSON.parse(localStorage.getItem("foods")) || [
    { id: 1, name: "Bún bò Huế", likes: 0, image: "https://cdn.tgdd.vn/2021/04/CookProduct/1200-1200x676-8.jpg" },
    { id: 2, name: "Phở bò Hà Nội", likes: 0, image: "https://bizweb.dktcdn.net/thumb/medium/100/489/006/articles/pho-bo-anh-bia.jpg?v=1698658470313" },
    { id: 3, name: "Cơm tấm Sài Gòn", likes: 0, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv16IRFu3FFP4AvBbqh6kGCe-0g0MW6NBzGF_PWtBUnWG7I5uX" },
];

function saveToLocalStorage() {
    localStorage.setItem("foods", JSON.stringify(foods));
}

function renderFoods() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    foods.forEach((food) => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food-item");

        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <h3>${food.name}</h3>
            <p>❤️ ${food.likes} lượt thích</p>
            <button onclick="likeFood(${food.id})">Thích +1</button>
        `;

        tbody.appendChild(foodItem);
    });
}

function likeFood(id) {
    const food = foods.find((item) => item.id === id);
    if (food) {
        food.likes += 1;
        saveToLocalStorage();
        renderFoods();
    }
}

renderFoods();