const num = 14;

var numberOfSteps = function (num) {
  let steps = 0;
  let count = num;

  while (count > 0) {
    if (count % 2 === 0) {
      count /= 2;
    } else {
      count--;
    }
    steps++;
  }
  return steps;
};

console.log(numberOfSteps(num));
