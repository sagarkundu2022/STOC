let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// 5
// 3
// 12
// 34
// 3
// 56

let n = parseInt(readLine());//5
let preNum = parseInt(readLine());//3
let flag = 1;
let inc = true;
let dec = true;

for (let i = 1; i < n; i++) {//1 < 5 2<5 3<5 4<5
    let currNum = parseInt(readLine());//12 34 3 56
    if (currNum >= preNum) {
        dec = false;
    } else if (currNum <= preNum) {
        inc = false;
    }
    preNum = currNum;//12 34 34 56
    if (!inc && !dec) {
        flag = 0;
        break;
    }

}
console.log(flag);
