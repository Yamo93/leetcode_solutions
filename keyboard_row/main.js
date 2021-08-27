/**
 * @param {string[]} words
 * @return {string[]}
 */

 var findWords = function(words) {
    const firstRow = {
        q: 'q',
        w: 'w',
        e: 'e',
        r: 'r',
        t: 't',
        y: 'y',
        u: 'u',
        i: 'i',
        o: 'o',
        p: 'p',
    };

    const secondRow = {
        a: 'a',
        s: 's',
        d: 'd',
        f: 'f',
        g: 'g',
        h: 'h',
        j: 'j',
        k: 'k',
        l: 'l',
    };

    const thirdRow = {
        'z': 'z',
        'x': 'x',
        c: 'c',
        v: 'v',
        b: 'b',
        n: 'n',
        m: 'm',
    };
    
    const output = [];
    
    function isCharInRow(lookup, char) {
        return lookup.hasOwnProperty(char.toLowerCase());
    }

    function handleRow(row, word) {
        const belongsToRow = row.hasOwnProperty(word[0].toLowerCase());
        if (!belongsToRow) {
            return;
        }

        let j = 1;
        while (j < word.length && isCharInRow(row, word[j])) {
            j++;
        }
        if (j === word.length) {
            output.push(word);
        }
    }
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        handleRow(firstRow, word);
        handleRow(secondRow, word);
        handleRow(thirdRow, word);
    }
    
    return output;
};