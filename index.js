// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(Math.max(drivers.length - 2, 1))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, func) {
    return func(drivers);
}