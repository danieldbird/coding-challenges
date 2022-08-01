const keyboards = [3, 1];
const drives = [5, 2, 8];
const b = 10;

// expected 9

function getMoneySpent(keyboards, drives, b) {
  let canBuy = false;
  let bestPrice = 0;
  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      if (keyboard + drive > bestPrice && keyboard + drive <= b) {
        bestPrice = keyboard + drive;
        canBuy = true;
      }
    });
  });

  if (canBuy) {
    return bestPrice;
  } else {
    return -1;
  }
}

getMoneySpent(keyboards, drives, b);
