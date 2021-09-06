/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    const lookup = {};
    let prefix = '';
    
    for (let i = 0; i < strs.length; i++) {
        
        for (let j = 0; j < strs[i].length; j++) {
            const char = strs[i][j];
            if (!lookup[char]) {
                lookup[char] = {
                    [j]: 1,
                };
            } else {
                lookup[char][j] = lookup[char][j] ? lookup[char][j] += 1 : 1;
            }
        }
    }
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        if (lookup[char][i] === strs.length) {
            prefix += char;
        } else {
            return prefix;
        }
    }
    
    return prefix;
};