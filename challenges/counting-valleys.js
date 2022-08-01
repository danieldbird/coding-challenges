const steps = 8;
const path = "UDDDUDUU";

// expected 1

function countingValleys(steps, path) {
  // Write your code here
  const pathSplit = path.split("");
  let seaLevel = 0;
  let valleys = 0;
  pathSplit.forEach((item, index) => {
    if (item === "U") {
      seaLevel += 1;
    } else {
      seaLevel === 0 && valleys++;
      seaLevel -= 1;
    }
  });
  return valleys;
}

countingValleys(steps, path);
