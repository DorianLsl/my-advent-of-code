let fs = require('fs');
const input = fs.readFileSync(`./input.txt`)
    .toString()
    .split('\n')
    .map(s => s.replace(/\r$/, ''))

const p2 = (data) => {
    let finalHorizontal = 0, finalDepth = 0, aim = 0;
    data.forEach(line => {
        const action = line.split(' ')[0]
        const value = +line.split(' ')[1]
        switch (action) {
            case "forward":
                finalHorizontal += value
                finalDepth += (value * aim)
                break;
            case "down":
                aim += value
                break;
            case "up":
                aim -= value
                break;
            default:
                break;
        }
    })
    return finalDepth * finalHorizontal
}

console.log(p2(input));