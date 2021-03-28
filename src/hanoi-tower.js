const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let time = {
    turns: 0,
    seconds: 0
  };
  time.turns=2**disksNumber-1;
  time.seconds=Math.floor(time.turns/turnsSpeed*3600);
  return time;
};
