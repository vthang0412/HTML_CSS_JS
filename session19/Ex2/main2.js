let character = prompt("Nhập một ký tự:");

if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
    alert(`ký tự ${character} là chữ cái`);
} else {
    alert(`không phải chữ cái`);
}