function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  var rounds = 3;
  var dice = [0, 0, 0, 0, 0];

  for (var i = 0; i < rounds; i++) {
    for (var j = 0; j < dice.length; j++) {
      dice[j] = rollDice();
    }

    console.log(`Round ${i + 1}: ${dice}`);
  }

  return scoreGame(dice);
}

function scoreGame(dice) {
  var score = 0;
  var counts = [0, 0, 0, 0, 0, 0];

  for (var i = 0; i < dice.length; i++) {
    counts[dice[i] - 1]++;
  }

  for (var i = 0; i < counts.length; i++) {
    if (counts[i] === 5) {
      score = 50; // Yacht
    } else if (counts[i] === 4) {
      score = 30; // Four of a kind
    } else if (counts[i] === 3) {
      if (counts.includes(2)) {
        score = 25; // Full house
      } else {
        score = 20; // Three of a kind
      }
    } else if (counts[i] === 2) {
      score = 15; // Two pairs
    }
  }

  console.log(`Final score: ${score}`);
  return score;
}

playGame();
