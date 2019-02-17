// Code your solutions in this file
function printBadges(badges) {
  for ( let i = 0; i < badges.length; i++ ) {
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
  };
  return badges;
};

function tailsNeverFails() {
  function maybetrue() {
    return Math.random() >= 0.5;
  };
  let i=0;
  while (maybetrue()) {
    i++;
  };
  return `You got ${i} tails in a row!`
};
