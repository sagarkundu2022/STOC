let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// 3
// 72 8
// 72 42
// 56 28

let n = parseInt(readLine());//3

for (let i = 0; i < n; i++) {///0/
    let inputLine = readLine().split(" ");///72 8
    let totalSeat = parseInt(inputLine[0]);/// 72
    let seatNum = parseInt(inputLine[1]);/// 8
    if (totalSeat >= seatNum && seatNum > 0) {///72>8 && 8>0 true
        if (seatNum % 8 === 0) {//8%8===0 true
            console.log("SU")//SU
        } else if (seatNum % 8 === 1 || seatNum % 8 === 4) {
            console.log("L")
        } else if (seatNum % 8 === 2 || seatNum % 8 === 5) {
            console.log("M")
        } else if (seatNum % 8 === 3 || seatNum % 8 === 6) {
            console.log("U")
        } else if (seatNum % 8 === 7) {
            console.log("SL")
        }
    } else {
        console.log("Invalid");
    }
}
