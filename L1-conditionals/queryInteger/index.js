let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let q = parseInt(readLine()); //27
let n = parseInt(readLine()); //5
let result = "not present"
for (let i = 0; i < n; i++) {// 0<5 true 1<5 true 2<5
    let currNum = parseInt(readLine()); //74 2087 27
    if (currNum === q) { //74!=27 false ; 2087!=27 false; 27===27 true
        result = "present";
        break;
    }
}
console.log(result);