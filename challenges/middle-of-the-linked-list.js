function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const middleNode = function (head) {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  const start = Math.floor(arr.length / 2);
  const newArr = arr.slice(start, arr.length).reverse();
  return newArr.reduce((acc, curr) => new ListNode(curr, acc), null);
};
