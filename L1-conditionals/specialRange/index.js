let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let m = parseInt(readLine()); // -2
let n = parseInt(readLine()); // 4

let count = 0;
let start = m; // -5

// for (let i = m; i <= n; i++) { // -2; -2<4; -1// 0; 0<4; 1 //2; 2<4; 3//4; 4=4; 
//     if (i >= 0) { // -2 >= 0 // false false true true true true true
//         count++; // 1 2 3 4 5
//         console.log(i);// 0 1 2 3 4
//     }
// }
// if (count === 0) { // 5 !=0
//     console.log("-1");
// }
//End


/// Converting for loop into while loop
let i = m;
while (i <= n) {
    if (i >= 0) { // -2 >= 0 // false false true true true true true
        count++; // 1 2 3 4 5
        console.log(i);// 0 1 2 3 4
    }
    i++;
}
if (count === 0) { // 5 !=0
    console.log("-1");
}







