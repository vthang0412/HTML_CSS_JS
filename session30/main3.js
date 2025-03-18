let phones = [];
let cart = [];
let choice;
let menu = `
1. Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…).
2. Thêm điện thoại mới vào cửa hàng.
3. Tìm kiếm điện thoại theo tên hoặc id.
4. Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng).
5. Thanh toán tất cả điện thoại trong giỏ hàng.
6. Sắp xếp điện thoại theo giá:
    a. Tăng dần.
    b. Giảm dần.
7. Hiển thị tổng số tiền của các điện thoại trong kho.
8. Hiển thị tổng số lượng điện thoại theo từng hãng (VD: samsung - 5,iphone - 3,...).
9. Thoát chương trình.
Lựa chọn của bạn (1-9):
`;

while (choice !== 9) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let company = prompt('Nhập tên hãng điện thoại bạn muốn hiển thị:');
            let isExist = false;
            for (let phone of phones) {
                if (phone.company.toLowerCase() === company.toLowerCase()) {
                    console.table(phone);
                    isExist = true;
                }
            }
            if (!isExist) {
                console.log('Không có điện thoại nào thuộc hãng này.');
            }
            break;
        case 2:
            let newId = phones.length + 1;
            let newName = prompt('Nhập tên điện thoại:');
            let newPrice = +prompt('Nhập giá điện thoại:');
            let newQuantity = +prompt('Nhập số lượng điện thoại:');
            let newCompany = prompt('Nhập hãng điện thoại:');
            let phone = {
                id: newId,
                name: newName,
                price: newPrice,
                quantity: newQuantity,
                company: newCompany,
            };
            phones.push(phone);
            console.log('Thêm điện thoại mới thành công!');
            console.table(phones);
            break;
        case 3:
            let search = prompt('Nhập tên hoặc id điện thoại muốn tìm kiếm:');
            let foundPhones = phones.filter(phone => phone.name.includes(search) || phone.id == search);
            if (foundPhones.length > 0) {
                console.log('Tìm kiếm thành công:');
                console.table(foundPhones);
            } else {
                console.log('Không tìm thấy điện thoại phù hợp.');
            }
            break;
        case 4:
            let buyId = +prompt('Nhập id điện thoại cần mua:');
            let buyQuantity = +prompt('Nhập số lượng điện thoại cần mua:');
            let phoneToBuy = phones.find(phone => phone.id === buyId);
            if (phoneToBuy) {
                if (phoneToBuy.quantity >= buyQuantity) {
                    phoneToBuy.quantity -= buyQuantity;
                    let cartItem = cart.find(item => item.id === buyId);
                    if (cartItem) {
                        cartItem.quantity += buyQuantity;
                    } else {
                        cart.push({ ...phoneToBuy, quantity: buyQuantity });
                    }
                    console.log('Mua điện thoại thành công!');
                } else {
                    console.log('Số lượng điện thoại trong kho không đủ.');
                }
            } else {
                console.log('Không tìm thấy điện thoại với id này.');
            }
            break;
            case 5:
                if (cart.length > 0) {
                    let total = 0;
                    for (let item of cart) {
                        total += item.price * item.quantity;
                    }
                    console.log(`Tổng số tiền thanh toán: ${total}`);
                    cart = [];
                    console.log('Thanh toán thành công và giỏ hàng đã được làm trống.');
                } else {
                    console.log('Giỏ hàng trống.');
                }
                break;
        case 6:
            let sortChoice = prompt('Chọn cách sắp xếp (a: Tăng dần, b: Giảm dần):');
            if (sortChoice === 'a') {
                phones.sort((a, b) => a.price - b.price);
            } else if (sortChoice === 'b') {
                phones.sort((a, b) => b.price - a.price);
            } else {
                console.log('Lựa chọn không hợp lệ.');
            }
            console.table(phones);
            break;
        case 7:
            let totalValue = phones.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
            console.log(`Tổng số tiền của các điện thoại trong kho: ${totalValue}`);
            break;
        case 8:
            let companyCounts = {};
            for (let phone of phones) {
                companyCounts[phone.company] = (companyCounts[phone.company] || 0) + phone.quantity;
            }
            console.log('Tổng số lượng điện thoại theo từng hãng:');
            console.table(companyCounts);
            break;
        case 9:
            console.log('Thoát chương trình.');
            break;
        default:
            console.log('Lựa chọn không hợp lệ.');
            break;
    }
}