let fs = require('fs');
const input = fs.readFileSync(`./input.txt`)
    .toString()
    .split('\n')
    .map(s => s.replace(/\r$/, ''))

const p1 = () => {
    let obj = []
    let gamma = ""
    let epsilon = ""

    input.forEach(line => {
        line.split('').forEach((bit,i) => {
            if (typeof obj[i] !== 'object')
                obj[i] = {0:0,1:0}
            obj[i][bit]++
        })
    })

    obj.forEach(o => {
        let highest = Object.keys(o).reduce((a, b) => o[a] > o[b] ? a : b);
        let lowest = Object.keys(o).reduce((a, b) => o[a] < o[b] ? a : b);

        gamma += highest
        epsilon += lowest
    })
    
    return parseInt(gamma,2) * parseInt(epsilon,2)
}

const p2 = () => {
}

console.log(p1())
console.log(p2())