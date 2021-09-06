/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        if (brackets.hasOwnProperty(character)) {
            stack.push(character);
        } else {
            const popped = stack.pop();
            if (character !== brackets[popped]) {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
};