const library = [
    {
        id: 1,
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        price: 20000,
        year: 2000,
        isAvailable: `true`,

    },
    {
        id: 2,
        title: 'Snow White',
        author: 'Brothers Grimm',
        price: 15000,
        year: 1812,
        isAvailable: `true`,
    },
]
let menu = `
----------------MENU----------------
1.Thêm sách mới.
2.Hiển thị danh sách sách.
3.Tìm kiếm sách theo tiêu đề.
4.Cập nhật trạng thái mượn/trả sách theo id sách.
5,Xóa sách theo id sách ra khỏi danh sách.
6.Sắp xếp sách theo giá tăng dần.
7.Thoát.
Lựa chọn của bạn (1-7):
`;
let choice;
while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let newTitle = prompt('Nhập tiêu đề sách mới:');
            let newAuthor = prompt('Nhập tác giả của sách:');
            let newPrice = +prompt('Nhập giá của sách:');
            let newYear = +prompt('Nhập năm xuất bản của sách:');
            let newIsavailable = prompt('Nhập trạng thái sách (true/false):');
            let newBook = {
                id: library.length + 1,
                title: newTitle,
                author: newAuthor,
                price: newPrice,
                year: newYear,
                isAvailable: newIsavailable,

            };
            library.push(newBook);
            break;
        case 2:
            displayBook();
            break;
        case 3:
            let searchTitle = prompt('Nhập tiêu đề sách cần tìm:');
            // let found = false;
            // for (let i in library){
            //     if (library[i].title.toLowerCase().includes(searchTitle.toLowerCase())){
            //         console.log(`ID: ${library[i].id}`);
            //         console.log(`Title: ${library[i].title}`);
            //         console.log(`Author: ${library[i].author}`);
            //         console.log(`Price: ${library[i].price}`);
            //         console.log(`Year: ${library[i].year}`);
            //         console.log(`Is available: ${library[i].isAvailable}`);
            //         found = true;
            //     }
            // }
            // if (!found){
            //     console.log('Không tìm thấy sách');
            // }

            let findIndex = -1;
            for (let index in library) {
                if (library[index].title === searchTitle) {
                    findIndex = index;
                    break;
                }
            }
            if (findIndex !== -1) {
                searchBook(library[findIndex], findIndex);
            } else {
                console.log(`Không tìm thấy sách có tên: ${searchTitle}`);
            }
            break;
        case 4:
            let searchID = +prompt('Nhập ID sách cần cập nhật trạng thái:');
            let updateID = -1;
            for (let index in library) {
                if (library[index].id === searchID) {
                    updateID = index;
                    break;
                }
            }
            if (updateID !== -1) {
                library[updateID].isAvailable  = ! library[updateID].isAvailable;
            } else {
                console.log(`Không tìm thấy sách có ID: ${searchID}`);
                break;
            }
            break;
        case 5:
            
            break;
        case 6:
            break;
        case 7:
            console.log('Thoát chương trình');
            break;
        default:
            console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại');
            break;
    }
}

function displayBook() {
    for (let i in library) {
        console.log(`Quyển sách số ${+i + 1}:`);
        console.log(`ID: ${library[i].id}`);
        console.log(`Title: ${library[i].title}`);
        console.log(`Author: ${library[i].author}`);
        console.log(`Price: ${library[i].price}`);
        console.log(`Year: ${library[i].year}`);
        console.log(`Is available: ${library[i].isAvailable}`);
        console.log('---------------------------------');
    }
    console.table(library);
}

function searchBook(book, index) {
    console.log(`Quyển sách bạn tìm:${+index + 1}`);
    console.log(`ID: ${library[book].id}`);
    console.log(`Title: ${library[book].title}`);
    console.log(`Author: ${library[book].author}`);
    console.log(`Price: ${library[book].price}`);
    console.log(`Year: ${library[book].year}`);
    console.log(`Is available: ${library[book].isAvailable}`);
    console.log('---------------------------------');
}