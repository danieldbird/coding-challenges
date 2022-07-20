const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

// expected 2 4

function breakingRecords(scores) {
  // Write your code here
  let highest = 0;
  let highTimes = 0;
  let lowest = 0;
  let lowTimes = 0;

  scores.forEach((score, index) => {
    if (index === 0) {
      highest = score;
      lowest = score;
    }
    if (score > highest) {
      highest = score;
      highTimes++;
    }
    if (score < lowest) {
      lowest = score;
      lowTimes++;
    }
  });

  return [highTimes, lowTimes];
}

console.log(breakingRecords(scores));
