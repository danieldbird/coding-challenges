const year = 1984;
// expected "12.09.1984"

function dayOfProgrammer(year) {
  // Write your code here
  if (year === 1918) {
    return "26.09.1918";
  }
  if (year < 1918) {
    // julian rules
    if (year % 4 === 0) {
      return "12.09." + year;
    } else {
      return "13.09." + year;
    }
  } else {
    // gregorian rules
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return "12.09." + year;
    } else {
      return "13.09." + year;
    }
  }
}

console.log(dayOfProgrammer(year));
