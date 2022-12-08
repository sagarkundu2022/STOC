let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Algo:
// 1. Read the number.
// 2. Find the length of the number.
// 3. Split the number into no-space separated value.
// 4. Find the product of each digit and store it.
// 5. Find the sum of each digit and store it.
// 6. Find the diff. b/w product and sum.
// 7. Show the diff.

let number = parseInt(readLine()); // 423 //40 // 0
let rem = 0;
let product = 1; // 3 6 24 /// 0 0 /// 1
if (number === 0) { // false /// true
    product = 0;/// 0
}
let sum = 0; //3 5 9 /// 0 4 /// 0
let result;

while (number != 0) { // 423!=0 true // 42!=0 true // 4!=0 true // 0!=0 false //// 40!=0 true // 4!=0 true // 0!=0 false 
    rem = number % 10; // 423%10=3 // 42%10=2 // 4%10=4 /// 40%10=0 // 4%10=4
    product = product * rem; // 1*3=3 // 3*2=6 // 6*4=24 /// 1*0=0 // 0*4=0
    sum = sum + rem; // 0+3=3 // 3+2=5 // 5+4=9 /// 0+0=0 // 0+4= 4
    number = parseInt(number / 10); // parseInt(423/10=42.3)>>parseInt(42.3)>>42 // 4 // 0 /// 40/10=4// parseInt(4/10=0.4)>> 0
}
result = product - sum; // 24-9=15 /// 0-4= -4 /// 0 - 0=0
console.log(result);// 15 /// -4






