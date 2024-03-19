function findMatching(drivers, searchString) {
    const lowercaseSearch = searchString.toLowerCase();
      const matchingDrivers = drivers.filter(driverName => {
      return driverName.toLowerCase() === lowercaseSearch;
    });
  
    return matchingDrivers;
  }
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => {
        return driver.startsWith(query);
    })
  }
  function matchName(drivers, name) {
    const matchingDrivers = [];
  
    for (const driver of drivers) {
      if (driver.name === name) {
        matchingDrivers.push(driver);
      }
    }
  
    return matchingDrivers;
  }