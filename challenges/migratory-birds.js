const arr = [1, 4, 4, 4, 5, 5, 5, 3];
// expected 4

function migratoryBirds(arr) {
  // Write your code here
  const obj = {};

  for (const key of arr) {
    obj[key] = obj[key] ? obj[key] + 1 : 1;
  }

  const result = Object.entries(obj).sort(([, a], [, b]) => b - a);

  return result[0][0];
}

console.log(migratoryBirds(arr));
