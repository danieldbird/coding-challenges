const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

const k = 3;

const data = mat.map((row, index) => {
  return {
    index,
    strength: row.reduce((prev, curr) => prev + curr),
  };
});

const sorted = data.sort((a, b) => {
  return a.strength - b.strength || a.index - b.index;
});

const result = sorted.map((item) => {
  return item.index;
});

console.log(result.slice(0, k));
