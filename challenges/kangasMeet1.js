const x1 = 0;
const v1 = 2;
const x2 = 5;
const v2 = 3;

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  const kangas = [
    {
      x: x1,
      v: v1,
    },
    {
      x: x2,
      v: v2,
    },
  ];
  const sortedKangas = kangas.sort((a, b) => b.x - a.x);
  // if the one behinds v is lower than the one in fronts v, they can never meet.
  if (sortedKangas[1].v < sortedKangas[0].v) {
    return "NO";
  }
  const vDiff = sortedKangas[0].v - sortedKangas[1].v;
  const xDiff = sortedKangas[0].x - sortedKangas[1].x;
  return xDiff % vDiff === 0 ? "YES" : "NO";
}

console.log(kangaroo(x1, v1, x2, v2));
