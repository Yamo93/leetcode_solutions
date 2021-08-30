/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length <= 0 || s.length > 5 * (10 ** 4)) {
        return 0;
    }
    
    let start = 0;
    let end = 0;
    let longest = 0;
    const lookup = new Set();
    
    while (end < s.length) {
        const char = s[end];
        if (!lookup.has(char)) {
            lookup.add(char);
            end++;
        } else {
            start++;
            end = start;
            lookup.clear();
        }
        longest = end - start > longest ? end - start : longest;
    }
    return longest;
};