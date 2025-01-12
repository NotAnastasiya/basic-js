const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date) {
    if(date.getMonth()=== 0 || 1 || 11) {
      return 'winter';
    }
    else if(date.getMonth() <= 4) {
      return 'spring';
    }
    else if(date.getMonth() <= 7) {
      return 'summer';
    }
    return 'fall';
  }
  return 'Unable to determine the time of year!';
}

module.exports = {
  getSeason
};
