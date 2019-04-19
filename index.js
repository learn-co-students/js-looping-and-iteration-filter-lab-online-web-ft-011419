function findMatching(drivers, name){
  return drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, partOfName){
  let lengthOfName = partOfName.length
return drivers.filter(function(driver) {return driver.slice(0, lengthOfName) === partOfName;
});
}


function matchName(drivers, driverString){
  return drivers.filter(function(driver) {return driver.name === driverString;
  });
}
