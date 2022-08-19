const n = 5;
const m = 2;
const s = 2;

// expected = 3

function saveThePrisoner(n, m, s) {
  // Write your code here
  let res = s + m - 1;
  res %= n;
  if (res === 0) {
    return n;
  }
  return res;

  // let count = s;
  // let arr = [];
  // for (let i = 0; i < m; i++) {
  //   // console.log(count);
  //   arr.push(count);
  //   if (count === n) {
  //     count = 1;
  //   } else {
  //     count++;
  //   }
  // }
  // return arr[arr.length - 1];
}

console.log(saveThePrisoner(n, m, s));
