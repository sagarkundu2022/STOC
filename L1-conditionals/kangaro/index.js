let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// 2
// 0 2 4 2
// 0 2 5 3

let len = parseInt(readLine());//2

for (let i = 0; i < len; i++) {
    let inputLine = readLine().split(" ");
    let x1 = parseInt(inputLine[0]);//0
    let v1 = parseInt(inputLine[1]);//3
    let x2 = parseInt(inputLine[2]);//4
    let v2 = parseInt(inputLine[3]);//2
    let flag = "NO";
    if (v1 > v2 && (x2 - x1) % (v1 - v2) === 0) {//Relative speed and distance
        flag = "YES";
    }
    console.log(flag);
}

// -------- Do NOT edit anything above this line ----------