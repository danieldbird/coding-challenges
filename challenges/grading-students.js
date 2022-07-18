const grades = [4, 73, 67, 38, 33, 84, 29, 57];

function gradingStudents(grades) {
  // Write your code here
  return grades.map((item) => {
    if (item < 38) {
      return item;
    }
    if (item % 5 >= 3) {
      return (item += 5 - (item % 5));
    }
    return item;
  });
}

console.log(gradingStudents(grades));
