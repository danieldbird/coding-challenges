const n = 1;

function utopianTree(n) {
  let cycle = 0;
  let height = 0;
  if (n !== 0) {
    while (cycle <= n) {
      if (cycle % 2 === 1) {
        height *= 2;
      } else {
        height++;
      }
      cycle++;
    }
  } else {
    height = 1;
  }
  return height;
}

console.log(utopianTree(n));
