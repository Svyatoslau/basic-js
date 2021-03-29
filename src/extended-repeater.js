const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = String(str)
  let sep = '+';
  if (typeof options.separator === 'string') {
    sep = options.separator;
  }
  let addit = '';
  if (options.hasOwnProperty('addition')) {
    addit = String(options.addition);
    if (Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes > 1) {
      let addSep = '|';

      let arr = new Array();
      for (let i = 0; i < Number(options.additionRepeatTimes); i++) {
        arr.push(addit);
      }
      if (typeof options.additionSeparator === 'string') addSep = options.additionSeparator;
      addit = arr.join(addSep);
    }
  }
  if (Number.isInteger(options.repeatTimes) && options.repeatTimes > 1) {
    let arr = new Array();
    for (let i = 0; i < Number(options.repeatTimes); i++) {
      arr.push(newStr + addit);
    }
    return arr.join(sep);
  } else return newStr + addit;
};
