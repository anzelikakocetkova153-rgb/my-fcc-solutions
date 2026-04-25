function decompress(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++){
    let current = words[i];
    
    if(isNaN(current)) {
      result.push(current);
    } else {
      let position = Number(current);
      let oldWord = result[position - 1]
      result.push(oldWord)
    }
}
return result.join(" ");
}