/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    const symbols = [
        { number: 1000, roman: 'M' },
        { number: 900, roman: 'CM' },
        { number: 500, roman: 'D' },
        { number: 400, roman: 'CD' },
        { number: 100, roman: 'C' },
        { number: 90, roman: 'XC' },
        { number: 50, roman: 'L' },
        { number: 40, roman: 'XL' },
        { number: 10, roman: 'X' },
        { number: 9, roman: 'IX' },
        { number: 5, roman: 'V' },
        { number: 4, roman: 'IV' },
        { number: 1, roman: 'I' },
    ];

    let integer = num;
    let result = '';
    let i = 0;

    while (integer) {
        const { number, roman } = symbols[i];

        while (integer >= number) {
            result += roman;
            integer -= number;
        }
        i++;
    }

    return result;
};

const o = intToRoman(20)
console.log(o);