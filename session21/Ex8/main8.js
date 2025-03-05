console.log("Các số Armstrong có 3 chữ số là:");

for (let i = 100; i <= 999; i++) {
    let hangTram = Math.floor(i / 100);
    let hangChuc = Math.floor((i % 100) / 10);
    let hangDonVi = i % 10;
    
    let tong = Math.pow(hangTram, 3) + Math.pow(hangChuc, 3) + Math.pow(hangDonVi, 3);
    
    if (tong === i) {
        console.log(i);
    }
} 