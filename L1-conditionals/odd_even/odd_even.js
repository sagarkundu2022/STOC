let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let number = parseInt(readLine());
if(number%2===0) {
    console.log("Even");
} else{
    console.log('Odd');
}