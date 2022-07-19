const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

// expected
// 1
// 1

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const applesInRange = apples.filter((item) => {
    return a + item >= s && a + item <= t;
  });
  const orangesInRange = oranges.filter((item) => {
    return b + item >= s && b + item <= t;
  });
  console.log(applesInRange.length);
  console.log(orangesInRange.length);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
