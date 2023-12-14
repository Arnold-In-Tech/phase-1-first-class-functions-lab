// Code your solution in this file!

//should return a new array containing the first two drivers from the passed-in array
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    return [drivers[0], drivers[1]];
}


// should return an array of the last two drivers
const returnLastTwoDrivers = function(drivers){
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}


// has the `returnFirstTwoDrivers` function to as its first element
// has the `returnLastTwoDrivers` function to as its last element
// allows us to invoke either function from the array
let  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


// returns a function
// should multiply a given value using the created multiplier

function createFareMultiplier(integer){
    return function fareFn(fare){
        return fare * integer;
    }
}
// console.log(createFareMultiplier(4)(50));


// is a function
// doubles fares
function fareDoubler(fare){
    const fareD = createFareMultiplier(2)(fare);
    return fareD;
}


// is a function
// triples fares
function fareTripler(fare){
    const fareT = createFareMultiplier(3)(fare);
    return fareT;
}


// returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers(arrayOfDrivers, f_Or_L_driver_Fn){
    return f_Or_L_driver_Fn(arrayOfDrivers);
}
