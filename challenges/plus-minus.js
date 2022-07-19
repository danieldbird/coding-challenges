const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  // Write your code here
  const positives = arr.filter((item) => item > 0);
  const negatives = arr.filter((item) => item < 0);
  const zeros = arr.filter((item) => item === 0);
  console.log(Number(positives.length / arr.length).toFixed(6));
  console.log(Number(negatives.length / arr.length).toFixed(6));
  console.log(Number(zeros.length / arr.length).toFixed(6));
}

plusMinus(arr);
