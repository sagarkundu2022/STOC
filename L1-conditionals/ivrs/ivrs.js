let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// 2
// 2
// 1
// 3
// 2
// 0
let count1 = 0;
let count2 = 0;
let count3 = 0;
for (let num = parseInt(readLine()); num != 0; num = parseInt(readLine())) {//2true 2true...0false
    if (num === 1) {//false
        count1++;
    } else if (num === 2) {//true
        count2++;//1
    } else if (num === 3) {
        count3++;
    }
}

// let num = parseInt(readLine());//2 
// while (num != 0) {// 2!=0true true true true true false
//     if (num === 1) { //false false true false false
//         count1++;//1
//     } else if (num === 2) { //true true false true
//         count2++;//1 2 3
//     } else if (num === 3) { //true
//         count3++;//1
//     }
//     num = parseInt(readLine());//2 1 3 2 0
// }

console.log(count1);//1
console.log(count2);//3
console.log(count3);//1
