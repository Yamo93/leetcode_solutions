/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (!digits.length || digits.length > 4) {
        return [];
    }
    
    const result = [];
    letterCombinationsRecursive(digits, 0, '');
    
    function letterCombinationsRecursive(digits, index, combination) {
    const map = [
        '0',
        '1',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ];
    
    if (combination.length === digits.length) {
        result.push(combination);
        return;
    }
    
    const digit = digits[index];
    const letters = map[digit];
    for (let i = 0; i < letters.length; i++) {
        letterCombinationsRecursive(digits, index+1, combination + letters[i]);
    }
}
    
    return result;
};