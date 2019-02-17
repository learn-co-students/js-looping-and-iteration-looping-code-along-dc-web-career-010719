function printBadges(people) {
  for (let index = 0; index < people.length; index++) {
    console.log(`Welcome ${people[index]}! You are employee #${index+1}.`);
  }
  return people;
}

function tailsNeverFails() {
  let count = 0;
  while (Math.random() >= 0.5) {
    count++;
  }
  return `You got ${count} tails in a row!`;
}