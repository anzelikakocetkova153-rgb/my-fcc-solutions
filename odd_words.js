function getOddWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let word of words) {
    if (word.length % 2 !== 0) {
      result.push(word);
    }
  }

  return result.join(" ");
}
