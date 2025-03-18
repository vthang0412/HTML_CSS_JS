const books = [];
let cart = [];
let choice;
let menu = `
1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
2. Thêm sách mới vào kho.
3. Tìm kiếm sách theo tên hoặc id.
4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
5. Sắp xếp sách theo giá:
    a. Tăng dần.
    b. Giảm dần.
6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng.
7. Hiển thị tổng số lượng sách trong kho.
8. Thoát chương trình.
Lựa chọn của bạn (1-8):
`;

while (choice !== 8) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let category = prompt('Nhập tên thể loại sách bạn muốn hiển thị:');
            let isExist = false;
            for (let i in books) {
                if (books[i].category === category) {
                    console.table(books[i]);
                    isExist = true;
                }
            }
            if (!isExist) {
                console.log("Thể loại sách không hợp lệ");
            }
            break;
        case 2:
            let newId = books.length + 1;
            let newName = prompt('Nhập tên sách mới:');
            let newPrice = +prompt('Nhập giá sách mới:');
            let newQuantity = +prompt('Nhập số lượng sách mới:');
            let newCategory = prompt('Nhập thể loại sách mới:');
            let book = {
                id: newId,
                name: newName,
                price: newPrice,
                quantity: newQuantity,
                category: newCategory,
            };
            books.push(book);
            console.log('Thêm sách mới thành công!');
            console.table(books);
            break;
        case 3:
            let search = prompt("Nhập tên hoặc id sách muốn tìm kiếm:");
            let foundBooks = books.filter(book => book.name.includes(search) || book.id == search);
            if (foundBooks.length > 0) {
                console.log('Tìm kiếm thành công');
                console.table(foundBooks);
            } else {
                console.log('Không có sách nào phù hợp với tìm kiếm');
            }
            break;
        case 4:
            let buyId = +prompt("Nhập id sách cần mua:");
            let buyQuantity = +prompt("Nhập số lượng sách cần mua:");
            let bookToBuy = books.find(book => book.id === buyId);
            if (bookToBuy) {
                if (bookToBuy.quantity >= buyQuantity) {
                    bookToBuy.quantity -= buyQuantity;
                    let cartItem = cart.find(item => item.id === buyId);
                    if (cartItem) {
                        cartItem.quantity += buyQuantity;
                    } else {
                        cart.push({ ...bookToBuy, quantity: buyQuantity });
                    }
                    console.log('Mua sách thành công!');
                } else {
                    console.log('Số lượng sách trong kho không đủ.');
                }
            } else {
                console.log('Không tìm thấy sách với id này.');
            }
            break;
        case 5:
            let sortChoice = prompt('Chọn cách sắp xếp (a: Tăng dần, b: Giảm dần):');
            if (sortChoice === 'a') {
                books.sort((a, b) => a.price - b.price);
            } else if (sortChoice === 'b') {
                books.sort((a, b) => b.price - a.price);
            } else {
                console.log('Lựa chọn không hợp lệ.');
            }
            console.table(books);
            break;
        case 6:
            let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
            let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            console.log(`Tổng số lượng sách đã mua: ${totalQuantity}`);
            console.log(`Tổng số tiền thanh toán: ${totalPrice}`);
            break;
        case 7:
            let totalBooksInStock = books.reduce((sum, book) => sum + book.quantity, 0);
            console.log(`Tổng số lượng sách trong kho: ${totalBooksInStock}`);
            break;
        case 8:
            console.log('Thoát chương trình.');
            break;
        default:
            console.log('Lựa chọn không hợp lệ.');
            break;
    }
}