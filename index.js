function printBadges(employeeNames) {
  for (let i = 0; i < employeeNames.length; i ++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i + 1}.`)
  }
  return employeeNames
}

function tailsNeverFails() {

  function flipCoin() {
    if (Math.random() >= 0.5) {
      return "tails"
    } else {
      return "heads"
    }
  }

  let counter = 0

  while (flipCoin() == "tails") {
    counter ++
  }

  return `You got ${counter} tails in a row!`
}
