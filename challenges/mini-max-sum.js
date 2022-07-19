const arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  // Write your code here
  const sorted = [...arr].sort();
  const min = sorted.slice(0, sorted.length - 1);
  const max = sorted.slice(1, sorted.length);
  console.log(
    min.reduce((prev, curr) => prev + curr),
    max.reduce((prev, curr) => prev + curr)
  );
}

miniMaxSum(arr);
