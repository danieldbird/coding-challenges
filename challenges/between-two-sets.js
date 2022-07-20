const a = [2, 4];
const b = [16, 32, 96];

function getTotalX(a, b) {
  // Write your code here
  let result = 0;

  for (let i = Math.max(...a); i < Math.min(...b) + 1; i++) {
    let isFactorMultiple = true;

    for (const key of a) {
      if (i % key !== 0) {
        isFactorMultiple = false;
        break;
      }
    }

    for (const key of b) {
      if (key % i !== 0) {
        isFactorMultiple = false;
        break;
      }
    }

    if (isFactorMultiple) {
      result++;
    }
  }
  return result;
}

getTotalX(a, b);
