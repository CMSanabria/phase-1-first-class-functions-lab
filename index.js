// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    // const driver1 = drivers[0];
    // const driver2 = drivers[1];
   //  return [driver1, driver2];
       return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    // const last = drivers.pop();
    // const nextToLast = drivers.pop();
    // return [nextToLast, last];
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function (fare) {
        return fare * multiplier;
    };
};

const fareDoubler = function(fare){
    return createFareMultiplier(2) (fare);
};

const fareTripler = function(fare){
    return createFareMultiplier(3) (fare);
};

function selectDifferentDrivers(arrayOfDrivers, returnDriversFunction){
    if (returnDriversFunction){
        if (returnDriversFunction === returnFirstTwoDrivers){
            return returnFirstTwoDrivers(arrayOfDrivers);
            } else if(returnDriversFunction === returnLastTwoDrivers){
           return returnLastTwoDrivers(arrayOfDrivers);
            }
        }
    }



