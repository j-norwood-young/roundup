const roundup = (num, units) => {
    // Shift by units
    let shifted = num * Math.pow(10, units);
    // Ceil
    let ceiled = Math.ceil(shifted);
    // Unshift by units
    let unshifted = 0;
    if (units < -1) {
        // Unshift by units
        unshifted = ceiled * Math.pow(10, Math.abs(units));
    } else {
        unshifted = ceiled / Math.pow(10, units);
    }
    return unshifted;
}

module.exports = roundup;