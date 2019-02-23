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
    return [...Array(4).keys()].map(i => "Q" + (((elapsedDays - 4 + i)%4 + 4)%4 + 1) + "/'" + ('0' + parseInt((elapsedDays - 4 + i)/4 + 90)%100).slice(-2))
}

export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

export function deepCopyWithUUID(obj) {
    return {...JSON.parse(JSON.stringify(obj)), uuid: uuid()}
}

export function dateStringAfterElapsedDays(elapsedDays) {
    const date = new Date(1990, 0, 1)
    const gameDate = addDays(date, elapsedDays)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return gameDate.toLocaleDateString("en-US", options)
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
