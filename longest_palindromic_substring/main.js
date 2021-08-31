/**
 * @param {string} s
 * @return {string}
 */

 function isPalindrome(s) {
    if (!s) {
        return false;
    }
    
    if (s.length === 1) {
        return true;
    }

    let start = 0;
    let end = s.length-1;
    
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--
    }
    return true;
}

var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;
    let longest = '';
    
    while (start < s.length) {
        let substring = s.slice(start, end+1);
        if (isPalindrome(substring)) {
            longest = substring.length > longest.length ? substring : longest;
        }
        end++;
        
        if (end === s.length) {
            start++;
            end = start;
        }
    }
    
    return longest;
};