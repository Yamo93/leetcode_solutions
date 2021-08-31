/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < ((-2) ** 31) || x > (2 ** 31) - 1) {
        return false;
    }
      
    const stringified = x.toString();
      let reversed = '';
      
      for (let i = stringified.length-1; i >= 0; i--) {
          reversed += stringified[i];
      }
      
      if (stringified === reversed) {
          return true;
      }
      return false;
  };