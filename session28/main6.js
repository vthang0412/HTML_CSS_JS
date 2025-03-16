const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

function tinhTongTien(cart) {
    let tongTien = 0;
    for (let i = 0; i < cart.length; i++) {
        tongTien += cart[i].price * cart[i].quantity;
    }
    return tongTien;
}

console.log("Tổng tiền trong giỏ hàng:", tinhTongTien(cart)); 
