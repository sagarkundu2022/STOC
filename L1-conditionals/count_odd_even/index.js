let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Algo:
// 1. Maintain 2 counts -- say countEven, countOdd. Initializing them to 0.
// 2. Read list length and store it in a variable--say listLen.
// 3. If iteration count is greater than listLen, print the result and exit the program. 
// 3. Read listItem and store in a variable. 
// 4. If listItem is odd, increment countOdd.
// 5. If listItem is even, increment countEven.
// 6. Keep repeating 3-5. 
// 7. Show oddCount and evenCount.

// 5
// 12
// 14
// 15
// 13
// 18

let givenLength = parseInt(readLine()); // 5
let oddCount = 0;
let evenCount = 0;
// for (let index = 0; index < givenLength; index = index + 1) { // 0 1 2 3 4
//     let currNum = parseInt(readLine()); // 12 14 15 13 18
//     if (currNum % 2 != 0) { // true true
//         oddCount = oddCount + 1; // 0+1=1 2
//     } else { // true true true
//         evenCount = evenCount + 1; // 0+1=1 2 3
//     }
// }
let index = 0;
while (index < givenLength) {//0<5true 1<5true 2<5true 3<5true 4<5true 5<5false
    let currNum = parseInt(readLine()); // 12 14 15 13 18
    if (currNum % 2 != 0) { //false false true true false
        oddCount = oddCount + 1; // 0+1=1 2
    } else { // true true true
        evenCount = evenCount + 1; // 0+1=1 2 3
    }
    index++;//1 2 3 4 5
}
console.log(oddCount); //2
console.log(evenCount); // 3


