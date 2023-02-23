const humanCatDogYears = number => {
    let humanYears = number;
    let catYears, dogYears;
    
    if (number === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (number === 2) {
      catYears = 24;
      dogYears = 24;
    } else {
      catYears = 24 + 4 * (number - 2);
      dogYears = 24 + 5 * (number - 2);
    }
  
    return [humanYears, catYears, dogYears];
  };
  

module.exports = humanCatDogYears;
