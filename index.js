// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
   let firstTwo =  drivers.slice(0, 2)
   return firstTwo
} 

const returnLastTwoDrivers = function(drivers){
   let n = drivers.length
   let lastTwo = drivers.slice(n - 2, n)  
   return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int){
   return function(fare){
     return  int * fare 
   }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, funct){
   return funct(drivers)
}