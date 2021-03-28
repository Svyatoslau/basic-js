const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let arr = ["spring", "summer", "autumn", "winter"];
  
  if (date instanceof Date) {
    
    let month = date.getMonth();

    if (month > 1) {
      if (month > 4) {
        if (month > 7) {
          if (month > 10) {
            if (month > 11) {
              throw new Error;
            } else return arr[3];
          } else return arr[2];
        } else return arr[1];
      } else return arr[0];
    } else if(month>=0) return arr[3];
    else throw new Error;
  }
  return 'Unable to determine the time of year!';
};
