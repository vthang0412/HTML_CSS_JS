let array = [4, 2, 7, 2, 8, 4, 9, 1, 4, 2];
console.log("Mảng ban đầu:", array);

let count = 0;
let max = 0;
let answer = array[0];

for (let i = 0; i < array.length; i++) {
    count = 0;
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;
        }
    }
    if (count > max) {
        max = count;
        answer = array[i];
    } else if (count == max) {
        if (array[i] < answer) {
            answer = array[i];
        }
    }
}
console.log("Số xuất hiện nhiều nhất:", answer);
console.log("Số lần xuất hiện:", max + 1);