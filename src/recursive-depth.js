const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      depth++;
      let max = 1;
      for (let k = 0; k < arr.length; k++) {
        let current = depth + this.calculateDepth(arr[k]);
        if (max < current) max = current;
      }
      depth = max;
    }
    return depth;
  }
};