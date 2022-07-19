const a = [1, 1, 2];

function lonelyinteger(a) {
  // Write your code here
  // Write your code here
  const obj = {};
  for (const key of a) {
    obj[key] = obj[key] ? obj[key] + 1 : 1;
  }
  const keys = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  return keys[0];
}

lonelyinteger(a);
