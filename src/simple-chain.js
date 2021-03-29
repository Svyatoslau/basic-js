const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: new Array(),
  getLength() {
    return this.arr.length;
  },
  addLink(value = ' ') {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position >= 0) {
      if (arr[position] !== undefined) {
        this.arr.slice(position, 1);
        return this;
      }
    }
    return Error;
  },
  reverseChain() {
    if (this.arr.length > 2) { this.arr = this.arr.reverse; };
    return this;
  },
  finishChain() {
    let str = '';
    if (this.arr.length == 1) {
      str = '( ' + this.arr[0] + ' )';
      this.arr = new Array();
      return str;
    }
    if (this.arr.length > 1) {
      str = '( ' + this.arr.join(' )~~( ') + ' )';
      this.arr = new Array();
      return str;
    }
    this.arr = new Array();
    return Error;
  }
};

module.exports = chainMaker;
