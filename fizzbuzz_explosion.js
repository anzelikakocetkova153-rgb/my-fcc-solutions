function explodeFizzbuzz(targetZCount) {
  let word = "fizzbuzz";
  let steps = 0;

  while (word.split("z").length - 1 < targetZCount) {
    steps ++;
    let nextWord = "";

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      let position = i + 1;

      if (position % 3 === 0 && position % 5 === 0) {
        nextWord += "fizzbuzz";
      } else if (position % 3 === 0) {
        nextWord += "fizz";
      } else if (position % 5 === 0) {
        nextWord += "buzz";
      } else {
        nextWord += char;
      }
    }
    word = nextWord;
  }
  return steps;
}