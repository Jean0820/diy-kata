const numberToReversedDigits = number => {
  const digits = [];
  while (number > 0) {
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }
  return digits;
};


module.exports = numberToReversedDigits;
