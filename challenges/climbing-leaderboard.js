const ranked = [100, 100, 50, 40, 40, 20, 10];
const player = [5, 25, 50, 120];

// expected
// 6
// 4
// 2
// 1

function climbingLeaderboard(ranked, player) {
  const arr = [...new Set(ranked)];
  return player.map((item) => {
    let newArr = [...arr, item];
    newArr.sort((a, b) => b - a);
    return newArr.indexOf(item) + 1;
  });
}

climbingLeaderboard(ranked, player);
