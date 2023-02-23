const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    const distance = 100; // km
    const speed = 50; // km/h
    const time = distance / speed;
    const result = reachDestination(distance, speed);
    const expected = `I should be there in ${time} hours.`;
    expect(result).toEqual(expected);
  });
});
