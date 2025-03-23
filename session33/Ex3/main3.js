let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];

let ul = document.getElementById("myUL");
let filterButton = document.getElementById("filterButton");
let categorySelect = document.getElementById("categorySelect");

function displayDishes(filteredDishes) {
    ul.innerHTML = "";
    for (let i of filteredDishes) {
        let li = `<li>
            <b>Tên đồ ăn:</b> ${i.name} - <b>Danh mục:</b> ${i.category}
        </li>`;
        ul.innerHTML += li;
    }
}

displayDishes(dish);
filterButton.addEventListener("click", () => {
    let selectedCategory = categorySelect.value;
    let filteredDishes = dish.filter(item => {
        return selectedCategory === "all" || item.category === selectedCategory;
    });

    displayDishes(filteredDishes);
});