const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, separated by commas and an ampersand", () => {
    const names = [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Jane", lastName: "Doe" },
      { firstName: "Bob", lastName: "Smith" },
    ];
    const result = joinNames(names);
    const expected = "John Doe, Jane Doe & Bob Smith";
    expect(result).toEqual(expected);
  });
  
});
