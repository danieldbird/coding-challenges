const isPalindrome = function (head) {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  const length = arr.length;
  const half1 = arr.slice(0, Math.floor(length / 2));
  const half2 = arr.slice(Math.ceil(length / 2), length);
  return half1.join("") === half2.reverse().join("");
};
