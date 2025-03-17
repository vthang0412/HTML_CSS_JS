const products = [];
let menu = `
1.Thêm sản phẩm vào danh sách sản phẩm.
2.Hiển thị tất cả sản phẩm.
3.Hiển thị chi tiết sản phẩm theo id.
4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5.Xóa sản phẩm theo id.
6.Lọc sản phẩm theo khoảng giá.
7.Thoát.
Lựa chọn của bạn (1-7):
`;
let choice;
while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayProducts();
            break;
        case 3:
            displayProductDetail();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteProduct();
            break;
        case 6:
            filterProductByPrice();
            break;
        case 7:
            console.log('Thoát chương trình.')
            break;
        default:
            console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại!');
            break;
    }
}
function addProduct() {
    let name = prompt('Nhập tên sản phẩm:');
    let price = +prompt('Nhập giá sản phẩm:');
    let category = prompt('Nhập danh mục sản phẩm:');
    let quantity = +prompt('Nhập số lượng sản phẩm:');
    if (name.trim() === '' || isNaN(price) || price <= 0 || category.trim() === '' || isNaN(quantity) || quantity <= 0) {
        console.log('Thông tin không hợp lệ.');
        return;
    }
    let product = {
        id: products.length + 1,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    };
    products.push(product);
    console.log('Thêm mới thành công!');
}
function displayProducts() {
    console.table('Danh sách sản phẩm:');
    console.table(products);
    if (products.length === 0) {
        console.log('Danh sách trống.');
    }
}
function displayProductDetail() {
    let id = +prompt('Nhập id sản phẩm cần xem:');
    let found = products.find(product => product.id === id);
    if (found) {
        console.table(found);
    } else {
        console.log('Không tìm thấy sản phẩm.');
    }
}
function updateProduct() {
    let id = +prompt('Nhập id sản phẩm cần cập nhật:');
    let found = products.find(product => product.id === id);
    if (found) {
        let name = prompt('Nhập tên sản phẩm:');
        let price = +prompt('Nhập giá sản phẩm:');
        let category = prompt('Nhập danh mục sản phẩm:');
        let quantity = +prompt('Nhập số lượng sản phẩm:');
        found.name = name;
        found.price = price;
        found.category = category;
        found.quantity = quantity;
        console.log('Cập nhật thành công!');
    } else {
        console.log('Không tìm thấy sản phẩm.');
    }
}
function deleteProduct() {
    let id = +prompt('Nhập id sản phẩm cần xóa:');
    let foundIndex = products.findIndex(product => product.id === id);
    if (foundIndex !== -1) {
        products.splice(foundIndex, 1);
        console.log('Xóa thành công!');
    } else {
        console.log('Không tìm thấy sản phẩm.');
    }
}
function filterProductByPrice() {
    let minPrice = +prompt('Nhập giá sản phẩm tối thiểu:');
    let maxPrice = +prompt('Nhập giá sản phẩm tối đa:');
    let result = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    console.table(result);
}