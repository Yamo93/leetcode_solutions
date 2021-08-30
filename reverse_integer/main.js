/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const isInt32 = (value) => (value | 0)  === value;
    if (x === 0) {
        return 0;
    }
    
    const isNegative = x < 0;
    const stringified = x.toString();
    let reversed = '';

    for (let i = stringified.length-1; i >= 0; i--) {
        reversed += stringified[i];
    }
    const output = parseInt(reversed);
    if (!isInt32(output)) {
        return 0;
    }
    return isNegative ? -output : output;
};