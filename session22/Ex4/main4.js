let input = prompt("Nhập dãy số ngẫu nhiên:");
let mangSo = input.split("");

let max = Number(mangSo[0]);

for (let i = 1; i < mangSo.length; i++) {
  let soHienTai = Number(mangSo[i]);
  if (soHienTai > max) {
    max = soHienTai;
  }
}

console.log("Giá trị lớn nhất trong mảng là: " + max);