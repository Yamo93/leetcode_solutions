/**
 * @param {number} num
 * @return {string}
 */

 function appendRomans(number) {
    const stringifiedNumber = number.toString();
    const tenth = stringifiedNumber.length > 1 ? 10 ** (stringifiedNumber.length-1) : 1;
    
    const subtractables = {
        4: 'IV',
        9: 'IX',
        40: 'XL',
        90: 'XC',
        400: 'CD',
        900: 'CM',
    };
    const isSubtractable = subtractables.hasOwnProperty(number);
    if (isSubtractable) {
        return subtractables[number];
    }
    const symbols = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    };
    const isSymbol = symbols.hasOwnProperty(number);
    if (isSymbol) {
        return symbols[number];
    }

    const isDivisible = number % tenth === 0;
    if (!isDivisible) {
        return '';
    }

   const tenths = {
       1000: 'M',
       100: 'C',
       10: 'X',
       1: 'I',
   };
   let roman = '';
   const digit = number / tenth;
   for (let i = 0; i < digit; i++) {
       roman += tenths[tenth];
   }
   return roman;
}

var intToRoman = function(num) {
   if (num < 1 || num > 3999) {
       return '';
   }

   const stringified = num.toString();
   const numOfDigits = stringified.length;
   let counter = numOfDigits > 1 ? 10 ** (numOfDigits-1) : 1;
   let i = 0;
   let roman = '';
   const numbers = [];
   while (counter >= 1) {
       const digit = parseInt(stringified[i], 10);
       const number = digit * counter;

       if (number > (5 * counter) && number < (9 * counter)) {
           numbers.push((5 * counter), number % (5 * counter));
       } else {
           numbers.push(number);
       }
       i++;
       counter /= 10;
   }
   
   for (let number of numbers) {
       roman += appendRomans(number);
   }
   
   return roman;
};

const o = intToRoman(58)
console.log(o);