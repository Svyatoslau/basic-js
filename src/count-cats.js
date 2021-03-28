const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let ushki=0;
  for(let arr of matrix){
    for(let value of arr){
      if(value=="^^") ushki++;
    }
  }
  return ushki;
};
