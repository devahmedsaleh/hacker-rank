function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);

  let min = Math.abs((arr[1] - arr[0]));
  for (let i = 1; i < arr.length - 1; i++) {
    min = Math.min(min, Math.abs(arr[i + 1] - arr[i]));
  }

  return min;
}
