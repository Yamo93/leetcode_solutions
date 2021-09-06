var longestCommonPrefix = function (strs) {
  let prefix = '';
  let j = 0;

  while (j < strs[0].length) {
    let currChar = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== currChar) {
        return prefix;
      }
    }
    prefix += currChar;
    j++;
  }
  return prefix;
};
