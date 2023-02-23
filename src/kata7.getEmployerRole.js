const getEmployerRole = (employeeName, employees) => {
    const employee = employees.find((employee) => employee.name === employeeName);
    return employee ? employee.role : undefined;
  };
  

module.exports = getEmployerRole;
