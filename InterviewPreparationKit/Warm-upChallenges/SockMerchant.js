function sockMerchant(n, ar) {
  let numPairs = 0;

  const hashSet = new Set();
  for (let color of ar) {
    if (hashSet.delete(color)) numPairs++;
    else hashSet.add(color);
  }

  return numPairs;
}
