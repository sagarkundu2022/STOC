let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// 5
// 23
// 45
// 18
// 20
// 17

let n = parseInt(readLine());// 5
let count = 0;
for (let i = 0; i < n; i++) {
    let age = parseInt(readLine());// 23 45 18 20 17
    if (age <= 18) { //false false true false true
        continue;// move to next iteration
    } else {
        count++ //1 2 3
    }
}
console.log(count);//3
