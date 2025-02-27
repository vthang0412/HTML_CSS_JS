
let d1 = prompt("2006-07-04");
let d2 = prompt("2006-09-10");

const date1 = new Date(d1);
const date2 = new Date(d2);

const milis = date2 - date1;

const day = milis / (1000 * 60 * 60 * 24);

document.write("Ngày thứ nhất:", d1);
document.write("<br>Ngày thứ hai:", d2);
document.write("<br>Số ngày chênh lệch:", day);