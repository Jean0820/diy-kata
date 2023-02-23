const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("returns human, cat and dog years based on input years", () => {
        const inputAge = 10;
        const result = humanCatDogYears(inputAge);
        const expected = [10, 56, 64];
        expect(result).toEqual(expected);
      });      
 });
// Look Ma, no handlebars!!!
