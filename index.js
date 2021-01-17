// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function(multiplier) {
    let newValue = int * multiplier
    return newValue
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(fare)(2)
}

const fareTripler = function(fare) {
  return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers(array,funcArg) {
  return funcArg(array)
}
