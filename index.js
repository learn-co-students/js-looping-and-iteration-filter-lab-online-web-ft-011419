function findMatching(drivers, string) {
  return drivers.filter(function (name) { return name.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (name) { return name.startsWith(string); });
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) { return driver.name === string; });
}
