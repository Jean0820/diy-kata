const joinNames = (namesObj) => {
    const names = namesObj.map((obj) => `${obj.firstName} ${obj.lastName}`);
    const last = names.pop();
    return names.length > 0
      ? `${names.join(", ")} & ${last}`
      : last;
  };
  

module.exports = joinNames;
