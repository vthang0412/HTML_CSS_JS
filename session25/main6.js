let str= prompt("Nhập chuỗi cần kiểm tra:");
alert(str + " " + outPut(str));
function outPut(str) {
    if(str.length === 0){
        return "Chưa có chuỗi nào";
    }
    for(let i=0; i < str.length/2; i++){
        if(str[i] === str[str.length-1-i]){
           return "Là chuỗi đối xứng";
        }
        else{
            return "Không phải chuỗi đối xứng";
        }
    }
}