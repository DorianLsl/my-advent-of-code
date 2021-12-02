let fs = require('fs');
const input = fs.readFileSync(`./input.txt`)
                .toString()
                .split('\n')
                .map(s => s.replace(/\r$/, ''))
                .map(t => parseInt(t))

let sum = 0
for (let i = 0; i < input.length; i++) {
    const e = input[i] + input[i+1] + input[i+2];
    const f = input[i+1] + input[i+2] + input[i+3];
    if (f > e)sum++
}
console.log(sum);