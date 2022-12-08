let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let countOdd = 0;
let countEven = 0;
for (let i = 0; i < n; i++) {
    let num = parseInt(readLine());
    if (num % 2 === 0) {
        countEven++;
    } else {
        countOdd++;
    }
}
console.log(countOdd);
console.log(countEven);