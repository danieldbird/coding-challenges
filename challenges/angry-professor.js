const k = 3;
const a = [-1, -3, 4, 2];

function angryProfessor(k, a) {
  let cancelled;
  const sortedTimes = a.sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    if (sortedTimes[i] <= 0) {
      cancelled = "NO";
    } else {
      cancelled = "YES";
    }
  }
  return cancelled;
}

console.log(angryProfessor(k, a));
