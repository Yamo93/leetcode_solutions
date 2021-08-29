/**
 * @param {string} s
 * @return {boolean}
 */

 var isPalindrome = function(s) {
    if (s.length < 1) {
        return false;
    }

    let startIndex = 0;
    let endIndex = s.length - 1;

    while (startIndex < endIndex) {
        let start = s[startIndex].toLowerCase();
        let end = s[endIndex].toLowerCase();

        if (!start.match(/^[0-9a-z]+$/)) {
            startIndex++;
            continue;
        }

        if (!end.match(/^[0-9a-z]+$/)) {
            endIndex--;
            continue;
        }

        if (start !== end) {
            return false;
        }

        startIndex++;
        endIndex--;
    }
    return true;
};