const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    const employees = [
      { name: "John Doe", role: "Developer" },
      { name: "Jane Doe", role: "Manager" },
      { name: "Bob Smith", role: "Salesperson" },
    ];
    const employeeName = "Jane Doe";
    const result = getEmployerRole(employeeName, employees);
    const expected = "Manager";
    expect(result).toEqual(expected);
  });
  
});
