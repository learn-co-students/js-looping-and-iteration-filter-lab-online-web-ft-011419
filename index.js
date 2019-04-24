// Code your solution in this file
function findMatching(driver, string){
return driver.filter(function (name) { return name.toLowerCase() === string.toLowerCase() ; })
}
function  fuzzyMatch(driver,string){
const match = string.length
return driver.filter(function (elment)   {const first = elment.slice(0,3);  return first === string })


}
function matchName(driver, string){
return driver.filter(function (object) { return object.name.toLowerCase() === string.toLowerCase() ; })
}
