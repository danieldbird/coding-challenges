const i = 20;
const j = 23;
const k = 6;

// expected 2

function beautifulDays(i, j, k) {
  const difference = j - i + 1;
  let days = 0;
  for (let index = 0; index < difference; index++) {
    const number = i + index;
    const reversedNumber = Number(
      String(i + index)
        .split("")
        .reverse()
        .join("")
    );
    if ((number - reversedNumber) % k === 0) {
      days++;
    }
  }
  return days;
}

beautifulDays(i, j, k);
