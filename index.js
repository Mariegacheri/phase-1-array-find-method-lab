// code your solution here
function superbowlWin(record) {
    const winObject = record.find(entry => entry.result === "W");
  
    if (winObject) {
      return winObject.year;
    } else {
      return undefined;
    }
  }
  
  const record = [
    { year: 1997, result: "W" },
    { year: 1998, result: "L" },
    { year: 2016, result: "L" },
    { year: 2018, result: "W" },
  ];
  
  const yearOfWin = superbowlWin(record); // This would return the year 1997.
  