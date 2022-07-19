const x1 = 0;
const v1 = 2;
const x2 = 5;
const v2 = 3;

function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  // if the one behinds v is lower than the one in fronts v, they can never meet.
  if ((x1 > x2 && v2 < v1) || (x2 > x1 && v1 < v2)) {
    return "NO";
  }
  const vDiff = Math.abs(v1 - v2);
  const xDiff = Math.abs(x1 - x2);
  return xDiff % vDiff === 0 ? "YES" : "NO";
}

console.log(kangaroo(x1, v1, x2, v2));
