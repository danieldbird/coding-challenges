const possibilities = [
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
];

const s = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

// expected 1
// possibilities resource https://en.wikipedia.org/wiki/Magic_square

function formingMagicSquare(s) {
  // Write your code here
  let total = 1000;
  possibilities.forEach((possibility) => {
    let energy = 0;
    possibility.forEach((possibilityRow, possibilityRowIndex) => {
      possibilityRow.forEach((row, rowIndex) => {
        console.log(Math.abs(row - s[possibilityRowIndex][rowIndex]));
        energy += Math.abs(row - s[possibilityRowIndex][rowIndex]);
      });
    });
    if (energy < total) {
      total = energy;
    }
  });
  return total;
}

formingMagicSquare(s);
