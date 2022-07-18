const accounts = [
  [1, 2, 3],
  [3, 1, 1],
];

const maximumWealth = function (accounts) {
  const data = accounts.map((item) => {
    return item.reduce((prev, curr) => prev + curr);
  });
  return data.sort((a, b) => b - a)[0];
};

console.log(maximumWealth(accounts));
