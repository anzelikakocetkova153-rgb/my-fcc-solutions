function isInCrossword(char) {
  let grid = [
    [0, 1, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
  ]

  let decimal = char.charCodeAt(0);
  let binary = decimal.toString(2).padStart(8, "0");

  for (let row = 0; row < 8; row ++){
    let strRow = grid[row].join("");
    if (strRow === binary) {
    return true;
  } 
  }

  for (let col = 0; col < 8; col ++) {
    let column = [];

  for (let row = 0; row < 8; row ++){
    column.push(grid[row][col]);
}
 let strCol = column.join("");
 
 if (strCol === binary) {
    return true;
  }
}
 return false;

}
 