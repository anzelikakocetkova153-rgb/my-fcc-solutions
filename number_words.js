function getNumberWords(n) {
  const units = [
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  const tens = [
    "", "", "twenty", "thirty", "forty",
    "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  if (n < 20) {
    return units[n];
  } else {
    let tenWord = Math.floor(n / 10);
    let unitDigit = n % 10;

  if (unitDigit === 0) {
    return tens[tenWord];
  } else {
    return tens[tenWord] + "-" + units[unitDigit];
  }
   }
}