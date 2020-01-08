function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);

  let i = 0;
  while (k > 0 && k >= prices[i]) {
    k -= prices[i];
    i++;
  }
  return i;
}
