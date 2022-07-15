const keypairs = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let total = 0;
  const split = s.split("");

  split.forEach((item, i, array) => {
    if (item === "I") {
      total += keypairs[item];
      if (array[i + 1] === "V" || array[i + 1] === "X") {
        total -= keypairs[item] * 2;
      }
    } else if (item === "X") {
      total += keypairs[item];
      if (array[i + 1] === "L" || array[i + 1] === "C") {
        total -= keypairs[item] * 2;
      }
    } else if (item === "C") {
      total += keypairs[item];
      if (array[i + 1] === "D" || array[i + 1] === "M") {
        total -= keypairs[item] * 2;
      }
    } else {
      total += keypairs[item];
    }
  });
  return total;
};

console.log(romanToInt("MCMXCIV"));
