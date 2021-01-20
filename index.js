const returnFirstTwoDrivers = function(arr) {return [arr[0], arr[1]]}

const returnLastTwoDrivers = function(arr) {return [arr[arr.length - 2], arr[arr.length - 1]]}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {return fare*multiplier}
}

function fareDoubler(fare) {
    const result = createFareMultiplier(2)(fare)
    return result
}

function fareTripler(fare) {
    const result = createFareMultiplier(3)(fare)
    return result
}

function selectDifferentDrivers(array, fn) {
    return fn(array)
}