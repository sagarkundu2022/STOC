let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Algo
// 1. Read the integer and store it in variable--say number.
// 3. Check whether it is 1<N<10^9.
// 3. If yes,multiply it by 2.
// 4. Show the output.

let number = parseInt(readLine());

if (number % 2 === 0) {
    console.log(number);
} else {
    console.log(number * 2);
}

