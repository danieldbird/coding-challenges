const matrix = [
  [4, 6, 14, 21],
  [17, 0, 5, 5],
  [4, 41, 22, 3],
  [2, 51, 6, 0],
];

function minimumCostPath(matrix) {
  let energy = 100;
  let currentIndex;
  for (let i = 0; i < matrix.length; i++) {
    let bestValue;
    if (i === 0) {
      // on the first loop [0] get the best starting position in the array
      bestValue = Math.min(matrix[i][0]);
      currentIndex = matrix[i].indexOf(bestValue);
    } else {
      // on each subsequent loop, check values directly under, or to the left or right and save the new best value
      bestValue = Math.min(
        ...[
          matrix[i][currentIndex - 1],
          matrix[i][currentIndex],
          matrix[i][currentIndex + 1],
        ].filter(Number.isFinite)
      );
      // save the new currentIndex
      currentIndex = matrix[i].indexOf(bestValue);
    }
    energy -= bestValue;
  }
  return energy;
}

console.log(minimumCostPath(matrix));
