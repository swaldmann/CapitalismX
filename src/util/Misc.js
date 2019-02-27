import * as uuid from 'uuid/v4'

// Pairing function as described here:
// http://szudzik.com/ElegantPairing.pdf
// This function defines a bijective ZxZ -> Z mapping,
// which allows us to create unique IDs from two
// integer input values.

export function uniqueIDFromIntegers(a, b) {
    return a >= b ? a * a + a + b : a + b * b
}

export function quarterStrings(elapsedDays) {
    const startDate = new Date(1990, 0, 1)
    const gameDate = dateForElapsedDays(elapsedDays)
    const quarterDifference = Math.ceil(getMonthsBetween(startDate, gameDate)/4)
    return [...Array(4).keys()].map(i => "Q" + (((quarterDifference - 4 + i)%4 + 4)%4 + 1) + "/'" + ('0' + parseInt((quarterDifference - 4 + i)/4 + 90)%100).slice(-2))
}

export function dollarString(amount) {
    return amount.toLocaleString("en-US", {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0})
}

export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

export function deepCopyWithUUID(obj) {
    return {...JSON.parse(JSON.stringify(obj)), uuid: uuid()}
}

export function dateForElapsedDays(elapsedDays) {
    const date = new Date(1990, 0, 1)
    return addDays(date, elapsedDays)
}

export function dateStringAfterElapsedDays(elapsedDays) {
    const date = new Date(1990, 0, 1)
    const gameDate = addDays(date, elapsedDays)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return gameDate.toLocaleDateString("en-US", options)
}

export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// https://stackoverflow.com/a/26930998
export function getMonthsBetween(date1,date2,roundUpFractionalMonths) {
    var startDate=date1;
    var endDate=date2;
    var inverse=false;
    if(date1>date2) {
        startDate=date2;
        endDate=date1;
        inverse=true;
    }

    //Calculate the differences between the start and end dates
    var yearsDifference=endDate.getFullYear()-startDate.getFullYear();
    var monthsDifference=endDate.getMonth()-startDate.getMonth();
    var daysDifference=endDate.getDate()-startDate.getDate();

    var monthCorrection=0;
    //If roundUpFractionalMonths is true, check if an extra month needs to be added from rounding up.
    //The difference is done by ceiling (round up), e.g. 3 months and 1 day will be 4 months.
    if(roundUpFractionalMonths===true && daysDifference>0) {
        monthCorrection=1;
    }
    //If the day difference between the 2 months is negative, the last month is not a whole month.
    else if(roundUpFractionalMonths!==true && daysDifference<0) {
        monthCorrection=-1;
    }

    return (inverse?-1:1)*(yearsDifference*12+monthsDifference+monthCorrection);
}

export function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
