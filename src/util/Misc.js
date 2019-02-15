// Pairing function as described here:
// http://szudzik.com/ElegantPairing.pdf
// This function defines a bijective ZxZ -> Z mapping,
// which allows us to create unique IDs from two
// integer input values.
export function uniqueIDFromIntegers(a, b) {
    return a >= b ? a * a + a + b : a + b * b
}
