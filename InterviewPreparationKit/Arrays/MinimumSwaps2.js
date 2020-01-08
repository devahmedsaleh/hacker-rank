function minimumSwaps(arr) {
  let count = 0;
  let currIndex = 0;

  while (currIndex < arr.length - 1) {
    const pivot = arr[currIndex];

    if (pivot === currIndex + 1) currIndex++;
    else {
      swap(arr, currIndex, pivot - 1);
      count++;
    }
  }

  return count;
}

function swap(arr, i, j) {
  arr[i] = arr[i] + arr[j];
  arr[j] = arr[i] - arr[j];
  arr[i] = arr[i] - arr[j];
}
