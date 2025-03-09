let arr = [];

let n = +prompt("mời bạn nhập vào số phần tử của mảng mà bạn mong muốn: ", "");
while (isNaN(n) || n <= 0) {
  n = +prompt("phần tử nhập vào chỉ có thể là số và không được âm:", "");
}

for (let i = 0; i < n; i++) {
  let value;
  do {
    value = prompt("Nhập vào phần tử thứ " + (i + 1));
    if (isNaN(value) || value.trim() === "") {
      alert("Vui lòng nhập số hợp lệ!");
    }
  } while (isNaN(value) || value.trim() === "");
  arr.push(+value);
}

if (arr.length < 2) {
  alert("Mảng vừa nhập không phải là dãy số Fibonacci!");
} else if (arr[0] !== 0 || arr[1] !== 1) {
  alert("Mảng vừa nhập không phải là dãy số Fibonacci!");
} else {
  let isFibonacci = true;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) {
      isFibonacci = false;
      break;
    }
  }
  if (isFibonacci) {
    alert("Mảng vừa nhập là dãy số Fibonacci!");
  } else {
    alert("Mảng vừa nhập không phải là dãy số Fibonacci!");
  }
}