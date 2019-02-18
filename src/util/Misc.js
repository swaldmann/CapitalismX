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
    return [...Array(4).keys()].map(i => "Q" + (((elapsedDays - 4 + i)%4 + 4)%4 + 1) + "/'" + parseInt(((elapsedDays - 4 + i)/4 + 90)%100).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))
}

export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

export function deepCopyWithUUID(obj) {
    return {...JSON.parse(JSON.stringify(obj)), uuid: uuid()}
}
