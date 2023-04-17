const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if((members.filter(item => typeof item !== 'string')).length !== members.length) {
    return members.reduce(function(acc, item) {
      if(typeof item === 'string') {
        acc = acc + item.replace(/\s/g,"").toUpperCase()[0];
      }
      return acc;
    },'').split("").sort().join("");
  }
}

module.exports = {
  createDreamTeam
};
