function checkMagazine(magazine, note) {
  const dict = new Map();

  for (let word of magazine) {
      let count = dict.get(word) || 0;
      dict.set(word, ++count)
  }

  for (let word of note) {
      let count = dict.get(word);
      if(!count) return console.log('No');
      dict.set(word, --count);
  }
  return console.log('Yes');
}