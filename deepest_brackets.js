function getDeepestBrackets(str) {
  let depth = 0;
  let maxDepth = 0;
  let start = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if ("([{".includes(ch)) {
      depth++;

      if (depth > maxDepth) {
        maxDepth = depth;
        start = i + 1;
      }
    } else if (")]}".includes(ch)) {
      if (depth === maxDepth) {
        result = str.slice(start, i);
      }

      depth--;
    }
  }
  return result;
}