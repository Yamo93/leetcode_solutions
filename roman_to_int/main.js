/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    if (s.length < 1 || s.length > 15) {
        return '';
    }

    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    
    const subtractables = {
        V: 'I',
        X: 'I',
        L: 'X',
        C: 'X',
        D: 'C',
        M: 'C',
    };
    
    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const previousChar = s[i-1];
        const currentValue = symbols[currentChar];
        const previousValue = symbols[previousChar];
        const isSubtractable = subtractables.hasOwnProperty(currentChar);
        const isPrevSubtract = previousChar === subtractables[currentChar];
        if (isSubtractable && isPrevSubtract) {
            const difference = currentValue - previousValue - previousValue;
            sum += difference;
        } else {
            sum += currentValue;
        }
    }
    
    return sum;
};