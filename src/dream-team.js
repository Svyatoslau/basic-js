const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = new Array();
  if (Array.isArray(members)) {
    for (let name of members) {
      if (typeof name === 'string') {
        arr.push(name.match(/[a-zA-z]/).join('').toUpperCase());
      }
    }
    arr.sort();
    return arr.join('');
  }
  return false;
};
