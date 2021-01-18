// Code your solution in this file!
const returnFirstTwoDrivers = function(passedArray) {
    return passedArray.slice(0,2)
}

const returnLastTwoDrivers = function(passedArray) {
    return passedArray.slice(passedArray.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    };
} 

const fareDoubler = function(int) {
    return createFareMultiplier(int)(2)
}

const fareTripler = function(int) {
    return createFareMultiplier(int)(3)
}

function selectDifferentDrivers(array, fun) {
    return fun(array)
}