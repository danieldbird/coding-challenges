const n = 11; // number of pages in the book
const p = 10; // the page number to turn to

// 5 and 4 expects 0
// 6 and 5 expects 1

function pageCount(n, p) {
  // Write your code here
  let arr = [];
  for (let i = 0; i < n + 1; i++) {
    arr.push(i);
  }
  if (n % 2 === 0) {
    arr.push(n + 1);
  }
  if (p > n / 2) {
    arr.reverse();
  }
  console.log(Math.floor(arr.indexOf(p) / 2));
  return Math.floor(arr.indexOf(p) / 2);
}

pageCount(n, p);
