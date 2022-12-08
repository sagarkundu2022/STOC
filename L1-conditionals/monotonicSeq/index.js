let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Algo
// 1. Read the seq. Length and store it.
// 2. Maintain two variables--say currNum and prevNum and initialise them into nothing.
// 3. Read currNum .
// 4. Read another number of the sequence and store it as nxtvNum.
// 5. Repeat 3-4.
// 6. If prevNum> currNum || prevNum<currNum, print '1'.
// 7. Otherwise, print 0.

// 5
// 3
// 1
// 34
// 34
// 56
let n = parseInt(readLine());//5
let preNum = parseInt(readLine());//3
let inc = true;
let dec = true;
let monotonic = 1;

for (let i = 1; i < n; i++) {//true
    let currNum = parseInt(readLine());//1
    if (currNum > preNum) {
        dec = false;
    } //false

    if (currNum < preNum) {
        inc = false;
    } // true
    preNum = currNum;
    if (!inc && !dec) {
        monotonic = 0//NOT MONOTONIC
        break;
    }
}
console.log(monotonic);




