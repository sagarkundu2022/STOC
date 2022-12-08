let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Algo
// 1. Read the space separated input, and store it in two variables- say num1 and num2.
// 2. Calculate the sum of num1 and num2.
// 3. If the sum is less than 12, print it.
// 4. If it is greater than 12,print sum - 12.

let nums = readLine().toString().split(" "); 
let num1 = parseInt(nums[0]); 
let num2 = parseInt(nums[1]); 
let sum = num1 + num2;

if (sum % 12 === 0) { 
    console.log(12);
} else {                 
    console.log(sum%12);
}

