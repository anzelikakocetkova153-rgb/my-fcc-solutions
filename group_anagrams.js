function groupAnagrams(words) {
  let groups = {};

  for (let word of words) {
    let key = word.split("").sort().join("");

    if (groups[key] === undefined) {
      groups[key] = [];
    }
    groups[key].push(word)
  }
  return Object.values(groups)
}