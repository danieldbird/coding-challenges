const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// expected 3

function sockMerchant(n, ar) {
  // Write your code here
  const obj = {};
  for (const key of ar) {
    obj[key] ? (obj[key] += 1) : (obj[key] = 1);
  }
  let pairs = 0;
  for (const key in obj) {
    pairs += Math.floor(obj[key] / 2);
  }
  return pairs;
}

sockMerchant(n, ar);
