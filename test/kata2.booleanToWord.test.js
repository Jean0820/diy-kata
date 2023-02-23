const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns 'Yes' when input is true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("returns 'No' when input is false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});

