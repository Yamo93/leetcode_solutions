/**
 * @param {string[]} arr
 * @return {number}
 */

function isUnique(str) {
  return new Set(str).size === str.length;
}

var maxLength = function (arr) {
  let maximum = 0;

  function isMaximum(start, current) {
    if (!isUnique(current)) {
      return;
    }

    maximum = Math.max(maximum, current.length);

    for (let i = start; i < arr.length; i++) {
      isMaximum(i + 1, current + arr[i]);
    }
  }

  isMaximum(0, '');

  return maximum;
};

maxLength(["un","iq","ue"]);
maxLength(["cha","r","act","ers"]);
maxLength(["abcdefghijklmnopqrstuvwxyz"]);
