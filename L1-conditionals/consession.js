let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// let age = parseInt(readLine());
// if (age > 60) {
//     console.log("eligible");
// } else {
//     console.log("not eligible");
// }

let age = parseInt(readLine());
let gender = readLine();

if ( (age > 60 && gender == 'male') || (age > 58 && gender == 'female') ) {
    console.log("eligible");
} else {
    console.log("not eligible");
}