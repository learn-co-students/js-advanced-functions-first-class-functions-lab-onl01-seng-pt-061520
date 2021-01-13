// Code your solution in this file!

//Declare a var with a const
//accept an array as an arg and return the first 2.
const returnFirstTwoDrivers = (array)=>{
    let drivers = []
    drivers.push(array[0],array[1])
    return drivers
}
//Declare a var with a const
//accept an array as an arg and return the last 2.
const returnLastTwoDrivers = (array)=>{
    let drivers = []
    drivers.push(array[array.length-2],array[array.length-1])
    return drivers
}

//Takes an array containing two elements: the two functions that we previously defined
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

//Higher Order Function
//takes in one argument, an integer
function createFareMultiplier(x){
    //if arg is "4", will return a function that takes in a fare as an argument and quadruples the fare
    return (fare)=>{
         if(x === 4){
             return fare * 4
         }else{
             //returns a function that will multiply a fare for a ride accordingly
             return x * fare 
         }
    }
}

//double the fare
const fareDoubler = createFareMultiplier(2)

//triple the fare
const fareTripler = createFareMultiplier(3)

//This function takes two arguments,
//an Array of Drivers and eith of the driver functions made earlier.
//Basically, put the array that is the first arg into the fuction that is the second arg
function selectDifferentDrivers(arrayOfDrivers, theDriverFunctions){

    return theDriverFunctions(arrayOfDrivers)
}