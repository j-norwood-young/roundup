const roundup = (num, units) => {
    if (units < -1) {
        // Shift by units
        let shifted = num * Math.pow(10, units);
        // Ceil
        let ceiled = Math.ceil(shifted);
        // Unshift by units
        let unshifted = ceiled * Math.pow(10, Math.abs(units));
        return unshifted;
    } else {
        // Shift by units
        let shifted = num * Math.pow(10, units);
        // Ceil
        let ceiled = Math.ceil(shifted);
        // Unshift by units
        let unshifted = ceiled / Math.pow(10, units);
        return unshifted;
    }
}

module.exports = roundup;