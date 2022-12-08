let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//n=5

let n = parseInt(readLine());
for (let i = 1; i <= n; i++) {//1true 2true 3true
    let str = ""; //"1"
    for (let j = 1; j <= i; j++) {//true true
        str = str + i;//""+1="1" "1"+2="12"
    }
    console.log(str);//1 
}