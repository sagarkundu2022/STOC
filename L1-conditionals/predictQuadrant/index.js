let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// 2
// 2 -9
// 1 3
let n = parseInt(readLine()); // 2

for (let index = 0; index < n; index = index + 1) { // 0
    let range = readLine().split(" "); // ("2", "-9")
                                       // ("1", "3")
    let x = range[0]; // ("2", "-9")
    let y = range[1]; // ("1", "3")
    if (x > 0 && y > 0) { // ("1", "3")
        console.log('Q1'); // "Q1"
    } else if (x < 0 && y > 0) {
        console.log('Q2');
    } else if (x < 0 && y < 0) {
        console.log('Q3');
    } else if (x > 0 && y < 0) { // ("2", "-9")
        console.log('Q4'); // "Q4"
    }
}

