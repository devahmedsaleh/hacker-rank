function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countA = 0,
    countB = 0;

  for (let d of apples) {
    if (d > 0 && d + a >= s && d + a <= t) countA++;
  }

  for (let d of oranges) {
    if (d < 0 && d + b >= s && d + b <= t) countB++;
  }

  console.log(countA);
  console.log(countB);
}
