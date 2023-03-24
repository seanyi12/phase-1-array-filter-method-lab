function findMatching(driver,string) {
  let car = driver.filter(drivers=> drivers.toUpperCase()===string.toUpperCase())
return car
}

function fuzzyMatch(driver,string){
  let car = driver.filter(drivers=>drivers.indexOf(string) ==0)
  return car
} 

function matchName(driver,string){
  let car = driver.filter(drivers=> drivers.name === string)
  return car
}
