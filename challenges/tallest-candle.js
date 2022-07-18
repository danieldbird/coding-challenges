function birthdayCakeCandles(candles) {
  // Write your code here
  const highest = Math.max(...candles);
  return candles.filter((item) => item === highest).length;
}
