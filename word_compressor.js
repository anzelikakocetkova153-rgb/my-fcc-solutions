function compress(str) {
  let words = str.split(" ");
  let dict = {};
  let result = [];

  for (let i = 0; i < words.length; i++){
    let word = words[i];
    let position = i + 1;

    if(dict[word] !== undefined) {
      result.push(dict[word])
    } else {
      dict[word] = position;
      result.push(word);
    }
  }
  return result.join(" ");
}