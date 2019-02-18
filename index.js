// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }
  return array;
}

function tailsNeverFails() {
  let streak = 0
  function tails() {
    return Math.random() >= 0.5;
  }
  while (tails()) {
    streak ++
  }
  return `You got ${streak} tails in a row!`
}
