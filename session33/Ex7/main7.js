const products = [
    {
        id: 1,
        name: "Điện thoại Samsung Galaxy A54",
        price: 7490000,
        img: "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg",
    },
    {
        id: 2,
        name: "Laptop Dell Inspiron 15",
        price: 15990000,
        img: "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053",
    },
    {
        id: 3,
        name: "Tai nghe AirPods Pro",
        price: 4990000,
        img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    },
    {
        id: 4,
        name: "Đồng hồ thông minh Apple Watch",
        price: 8990000,
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA",
    },
    {
        id: 5,
        name: "Máy ảnh Canon EOS M50",
        price: 12490000,
        img: "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg",
    },
    {
        id: 6,
        name: "Loa Bluetooth JBL Flip 5",
        price: 2190000,
        img: "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910",
    },
    {
        id: 7,
        name: "Bàn phím cơ Logitech G Pro",
        price: 2490000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
    },
    {
        id: 8,
        name: "Chuột không dây Logitech MX Master",
        price: 1890000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
    },
];

let cart = [];

function displayProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";

    products.forEach((product) => {
        const productCard = `
        <div class="product-card">
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p style="color:red">${product.price.toLocaleString()}₫</p>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
        </div>
      `;
        productGrid.innerHTML += productCard;
    });
}

function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    const cartItem = cart.find((item) => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="empty-cart">Giỏ hàng trống</div>`;
        cartTotal.textContent = "Tổng: 0₫";
        return;
    }

    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.quantity;

        const cartItem = `
        <div class="cart-item">
          <p><strong>${item.name}</strong></p>
          <p style="color:red; font-weight: bold;">${item.price.toLocaleString()}₫</p>
          <div class="quantity-controls">
            <button class="quantity-btn" style="background-color: #4caf50; color: white;" onclick="decreaseQuantity(${item.id})">-</button>
            <span style="margin: 0 10px; font-weight: bold;">${item.quantity}</span>
            <button class="quantity-btn" style="background-color: #4caf50; color: white;" onclick="increaseQuantity(${item.id})">+</button>
            <button class="quantity-btn remove" style="background-color: #e63946; color: white;" onclick="removeFromCart(${item.id})">X</button>
          </div>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 10px 0;">
      `;
        cartItems.innerHTML += cartItem;
    });

    cartTotal.textContent = `Tổng: ${total.toLocaleString()}₫`;
}

function increaseQuantity(productId) {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(productId) {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
    } else {
        removeFromCart(productId);
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Mua hàng thành công! Tổng số tiền: ${total.toLocaleString()}₫`);
    cart = [];
    updateCart();
}
displayProducts();