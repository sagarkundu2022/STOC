let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// 5
// 10
// 20
// 30
// 40
// 10

let seqLength = parseInt(readLine()); // 5
let firstValue = parseInt(readLine()); // 10
let countFirst = 1; // countFirst = 1 ;
for (let index = 1; index < seqLength; index = index + 1) { // 1 2 3 4 
    let currNum = parseInt(readLine()); // 20 30 40 10
    if (currNum === firstValue) { // false false false true
        countFirst = countFirst + 1; // 1 1 1 2
    }
}
console.log(countFirst);