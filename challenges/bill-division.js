const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;

// expected 5

function bonAppetit(bill, k, b) {
  // Write your code here
  const annasTotal =
    bill.filter((item, index) => index !== k).reduce((prev, curr) => prev + curr) / 2;
  const annasChange = b - annasTotal;
  annasChange === 0 ? console.log("Bon Appetit") : console.log(annasChange);
}

bonAppetit(bill, k, b);
