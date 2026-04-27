function getWordScore(word) {
  let total = 0;

  for (let letter of word.toLowerCase()) {
    total += letter.charCodeAt(0) - 96;
  }

  return total;
}