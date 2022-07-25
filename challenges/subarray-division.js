const s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const d = 18;
const m = 7;
// expected = 3

function birthday(s, d, m) {
  // Write your code here
  const splits = s.map((item, index, array) => {
    return array.slice(index, index + m);
  });
  const lengthMatch = splits.filter((item) => item.length === m);
  const sums = lengthMatch.map((item) => item.reduce((prev, curr) => prev + curr));
  const sumsMatch = sums.filter((item) => item === d);
  return sumsMatch.length;
}

birthday(s, d, m);
