const restaurants = [];

let menu = `
1. Thêm món ăn vào danh mục.
2. Xóa món ăn theo tên khỏi danh mục.
3. Cập nhật thông tin theo tên của món ăn (tên, giá, mô tả).
4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
6. Thoát.
Lựa chọn của bạn (1-6):
`;

let choice;
while (choice !== 6) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            addDish();
            break;
        case 2:
            deleteDishByName();
            break;
        case 3:
            updateDishByName();
            break;
        case 4:
            displayMenu();
            break;
        case 5:
            searchDishByName();
            break;
        case 6:
            console.log('Thoát chương trình.');
            break;
        default:
            console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại!');
            break;
    }
}

function addDish() {
    let category = prompt('Nhập danh mục:');
    let name = prompt('Nhập tên món ăn:');
    let price = +prompt('Nhập giá món ăn:');
    let description = prompt('Nhập mô tả món ăn:');

    if (category.trim() === '' || name.trim() === '' || isNaN(price) || price <= 0 || description.trim() === '') {
        console.log('Thông tin không hợp lệ.');
        return;
    }

    let categoryIndex = restaurants.findIndex(cat => cat.category === category);
    if (categoryIndex === -1) {
        restaurants.push({ category, dishes: [{ name, price, description }] });
    } else {
        restaurants[categoryIndex].dishes.push({ name, price, description });
    }
    console.log('Đã thêm món ăn vào danh mục.');
}

function deleteDishByName() {
    let name = prompt('Nhập tên món ăn cần xóa:');
    for (let i in restaurants) {
        let dishIndex = restaurants[i].dishes.findIndex(dish => dish.name === name);
        if (dishIndex !== -1) {
            restaurants[i].dishes.splice(dishIndex, 1);
            console.log('Đã xóa món ăn.');
            return;
        }
    }
    console.log('Không tìm thấy món ăn với tên này.');
}

function updateDishByName() {
    let name = prompt('Nhập tên món ăn cần cập nhật:');
    for (let i in restaurants) {
        let dish = restaurants[i].dishes.find(dish => dish.name === name);
        if (dish) {
            dish.name = prompt('Nhập tên mới:', dish.name);
            dish.price = +prompt('Nhập giá mới:', dish.price);
            dish.description = prompt('Nhập mô tả mới:', dish.description);
            console.log('Đã cập nhật thông tin món ăn.');
            return;
        }
    }
    console.log('Không tìm thấy món ăn với tên này.');
}

function displayMenu() {
    if (restaurants.length === 0) {
        console.log('Menu trống.');
        return;
    }
    for (let i in restaurants) {
        console.log(`Danh mục: ${restaurants[i].category}`);
        for (let j in restaurants[i].dishes) {
            console.log(`  Tên: ${restaurants[i].dishes[j].name}, Giá: ${restaurants[i].dishes[j].price}, Mô tả: ${restaurants[i].dishes[j].description}`);
        }
    }
}

function searchDishByName() {
    let name = prompt('Nhập tên món ăn cần tìm:');
    for (let i in restaurants) {
        let dish = restaurants[i].dishes.find(dish => dish.name === name);
        if (dish) {
            console.log(`Tìm thấy món ăn: Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`);
            return;
        }
    }
    console.log('Không tìm thấy món ăn với tên này.');
}