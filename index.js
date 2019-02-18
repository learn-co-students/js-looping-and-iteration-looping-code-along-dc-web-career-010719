// Code your solutions in this file
function printBadges(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
    }
    return arr
}

function tailsNeverFails() {
    let t = 0
    while (Math.random() >= 0.5) {
        t++
    }
    return `You got ${t} tails in a row!`
}