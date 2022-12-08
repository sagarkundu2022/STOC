let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// Algo:
// 1. Read the input.
// 2. Maintain a varible say reversed and Initializing it into blank.
// 3. Maintain a remainder variable --say rem as zero initially.
// 4. Find the remainder and keep it as the first digit of the reversed integer.
// 5. If the first digit of the reversed integer is 0, removed that.
// 6. Show the reversed integer.

let number = parseInt(readLine()); // 123 // -123
let rem = 0;
let reversed = "";

if (number === 0) { // false
    reversed = 0;
}

while (number != 0) { // 123 !=0 true; / 12!=0 / 1!=0 / 0!=0 false /// -123!=0 true;/12!=0 true/1!=0 true/0!=0false
    rem = number % 10; // 123%10=3; / 12%10=2 / 1%10= 1 /// -123%10=-3/-12%10=2/1%10=1
    reversed = reversed + rem;// "" + 3="3"; / "3"+2="32" /"32"+1="321" /// ""+-3="-3"/ "-3"+2="-32"/"-32"+1=-321
    number = parseInt(number / 10); // 12 / 1 / 0 /// -12 / 12/10= 1/ 0
    if (number < 0) { // -12 true
        number = number * -1; // -12*-1=12
    }
}
// parseInt(num,10); Removed zero from staring digit of an integer. 

console.log(parseInt(reversed, 10));//321///-321