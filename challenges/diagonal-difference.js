const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // Write your code here
  const ltr = [];
  const rtl = [];
  for (let i = 0; i < arr.length; i++) {
    ltr.push(arr[i][i]);
    rtl.push(arr[i][arr.length - 1 - i]);
  }
  const ltrSum = ltr.reduce((prev, curr) => prev + curr);
  const rtlSum = rtl.reduce((prev, curr) => prev + curr);

  return Math.abs(ltrSum - rtlSum);
}

diagonalDifference(arr);
