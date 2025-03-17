const contacts = [];
let menu = `
----------------MENU----------------
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.
Lựa chọn của bạn (1-6):
`;
let choice;
while (choice !== 6) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            displayContacts();
            break;
        case 3:
            searchContact();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log('Thoát chương trình.')
            break;
        default:
            console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại!');
            break;
    }
}
function addContact() {
    let name = prompt('Nhập tên:');
    let email = prompt('Nhập email:');
    let phone = prompt('Nhập số điện thoại:');
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || isNaN(phone) || phone.length < 10 || phone.length > 11) {
        console.log('Thông tin không hợp lệ.');
        return;
    }
    let contact = {
        id: contacts.length + 1,
        name: name,
        email: email,
        phone: phone
    };
    contacts.push(contact);
    console.log('Thêm mới thành công!');
}
function displayContacts() {
    console.table('Danh sách danh bạ:');
    console.table(contacts);
    if (contacts.length === 0) {
        console.log('Danh sách trống.');
    }
}
function searchContact() {
    let phone = prompt('Nhập số điện thoại cần tìm:');
    if (phone.trim() === '' || isNaN(phone) || phone.length < 10 || phone.length > 11) {
        console.log('Số điện thoại không hợp lệ.');
        return;
    }
    let found = contacts.find(contact => contact.phone === phone);
    if (found) {
        console.table(found);
    } else {
        console.log('Không tìm thấy số điện thoại trên.');
    }
}
function updateContact() {
    let id = +prompt('Nhập id cần cập nhật:');
    let found = contacts.find(contact => contact.id === id);
    if (found) {
        let name = prompt('Nhập tên mới:');
        let email = prompt('Nhập email mới:');
        let phone = prompt('Nhập số điện thoại mới:');
        found.name = name;
        found.email = email;
        found.phone = phone;
        console.log('Cập nhật thành công!');
    } else {
        console.log('Không tìm thấy id trên.');
    }
}
function deleteContact() {
    let id = +prompt('Nhập id cần xóa:');
    let index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log('Xóa thành công!');
    } else {
        console.log('Không tìm thấy id trên.');
    }
}
