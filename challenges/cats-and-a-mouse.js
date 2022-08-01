const x = 2;
const y = 5;
const z = 4;

// expected 'Cat B'

function catAndMouse(x, y, z) {
  const catADistance = [x, z].sort((a, b) => b - a).reduce((prev, curr) => prev - curr);
  const catBDistance = [y, z].sort((a, b) => b - a).reduce((prev, curr) => prev - curr);
  if (catADistance === catBDistance) {
    return "Mouse C";
  }
  if (catADistance < catBDistance) {
    return "Cat A";
  } else {
    return "Cat B";
  }
}

catAndMouse(x, y, z);
