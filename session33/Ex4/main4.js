const products = [
    {
        id: 1,
        name: "Laptop Dell XPS 15",
        price: 35990000,
        image:
            "https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0",
        description:
            "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 32990000,
        image: "https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj",
        description:
            "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: 28990000,
        image:
            "https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain",
        description:
            "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
    },
    {
        id: 4,
        name: "Tai nghe Sony WH-1000XM5",
        price: 7990000,
        image:
            "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf",
        description:
            "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
    },
    {
        id: 5,
        name: "Apple Watch Series 9",
        price: 11990000,
        image:
            "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg",
        description:
            "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
    },
    {
        id: 6,
        name: "Loa JBL Charge 5",
        price: 3990000,
        image:
            "https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain",
        description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
    },
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    filteredProducts.forEach((product) => {
        const productCard = `
        <div class="col-md-4 col-lg-3 mb-4">
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text"><strong>${product.price.toLocaleString()} VNĐ</strong></p>
              <button class="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>`;
        productList.innerHTML += productCard;
    });
}

displayProducts(products);