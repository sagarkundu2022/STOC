let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let Tn = parseInt(readLine());
if (Tn === 0) {
    console.log(0);
} else if (Tn === 1 || Tn === 2) {
    console.log(1);
} else {
    let a = 0;
    let b = 1;
    let c = 1;
    let Ti = a + b + c;
    for (let i = 3; i < Tn; i++) {
        Ti = a + b + c;
        a = b;
        b = c;
        c = Ti;
    }
    console.log(Ti);
}

