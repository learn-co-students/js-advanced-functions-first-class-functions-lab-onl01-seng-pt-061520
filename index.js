// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2) //ask chett, is this saying start at "0" finish at "2" thus returning elements [0,1]?
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2) //start two elements back from the end of the array and iterate over then return those final elements. 
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value
    }
}
const fareDoubler = createFareMultiplier(2)//calling on the "createFareMultiplier" and multiplying it by "2" passed in as an argument

const fareTripler = createFareMultiplier(3)//Same as above but multiplying by "3" passed in at the end

const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers)
}