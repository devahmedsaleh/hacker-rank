function angryProfessor(k, a) {
  for (let time of a) {
    if (time <= 0) k--;
    if (k === 0) return 'NO';
  }
  return 'YES';
}
