const n = 3;

// expected 9

function viralAdvertising(n) {
  let shared = 0;
  let liked = 0;
  let totalLikes = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      shared = 5;
      liked = Math.floor(shared / 2);
      totalLikes += liked;
    } else {
      shared = Math.floor(shared / 2) * 3;
      liked = Math.floor(shared / 2);
      totalLikes += liked;
    }
    arr.push(totalLikes);
  }
  return arr[arr.length - 1];
}

viralAdvertising(n);
