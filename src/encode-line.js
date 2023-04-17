const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let y=0;
  let i=0;
  arr[y] = 1;
  arr[y+1] = str[i];
  for(;i<str.length;i++) {
      if(str[i+1] === str[i]) {
         arr[y] += 1; 
      }
      else {
          y+=2;
          arr[y] = 1;
          arr[y+1] = str[i+1];
      }
  }
  return arr.join('').replace(/1/g,'');
}

module.exports = {
  encodeLine
};
