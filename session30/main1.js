let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    },
];
let cart = [];
let menu = `
1.Hiển thị các sản phẩm theo tên danh mục.
2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
    a.Sản phẩm không có trong cửa hàng hiển thị thông báo.
    b.Sản phẩm có trong cửa hàng
        i.Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
        ii.Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
    a.Tăng dần.
    b.Giảm dần.
4.Tính số tiền thanh toán trong giỏ hàng.
5.Thoát.
Lựa chọn của bạn (1-5):
`;
let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let category = prompt('Nhập tên danh mục sản phẩm bạn muốn hiển thị:');
            let isExist = false;
            for (let i = 0; i < products.length; i++) {
                if (products[i].category === category) {
                    console.table(products[i]);
                    isExist = true;
                }
            }
            if (!isExist) {
                console.log('Không có sản phẩm nào trong danh mục bạn nhập.');
            }
            break;
        case 2:
            let id = +prompt('Nhập id sản phẩm bạn muốn mua:');
            let product = products.find(p => p.id === id);
            if (!product) {
                alert('Sản phẩm không có trong cửa hàng.');
            } else {
                let quantity = +prompt('Nhập số lượng sản phẩm bạn muốn mua:');
                if (quantity > product.quantity) {
                    alert('Số lượng sản phẩm trong cửa hàng không đủ.');
                } else {
                    product.quantity -= quantity;
                    let cartItem = cart.find(product => product.id === id);
                    if (cartItem) {
                        cartItem.quantity += quantity;
                    } else {
                        cart.push({ product, quantity });
                    }
                    console.log('Mua thành công.');
                    console.table(cart);
                }
            }
            break;
        case 3:
            let sort = prompt('Nhập tên danh mục sản phẩm muốn sắp xếp:');
            let type = prompt('Nhập kiểu sắp xếp (a: Tăng dần, b: Giảm dần):');
            let sortProducts = products.filter(product => product.category === sort);
            if (type === 'a') {
                sortProducts.sort((a, b) => a.price - b.price);
                console.table(sortProducts);
            } else if (type === 'b') {
                sortProducts.sort((a, b) => b.price - a.price);
                console.table(sortProducts);
            } else {
                console.log('Kiểu sắp xếp không hợp lệ.');
            }
            break;
        case 4:
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                cart[i].total = cart[i].price * cart[i].quantity;
                total += cart[i].total;
            }
            console.log('Tổng tiền thanh toán:', total);
            console.table(cart);
            break;
        case 5:
            console.log('Thoát chương trình.');
            break;
        default:
            console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại!');
            break;
    }
}