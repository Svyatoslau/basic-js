const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) return Error;

    let nMessage = String(message);
    let nKey = String(key);
    nKey = ''.padStart(nMessage.length, nKey);
    let start = 'A'.charCodeAt(0);
    let str = ''
    for (let i = 0, k = 0; i < nMessage.length; i++, k++) {
      if (/[A-Za-z]/.test(nMessage[i])) {
        let M = nMessage[i].toUpperCase();
        M = Number(M.charCodeAt(0));
        let K = nKey[k].toUpperCase();
        K = Number(K.charCodeAt(0));
        let ind = ((M - start) + (K - start)) % 26;
        str += String.fromCharCode(ind + start);
      } else {
        k--;
        str += nMessage[i];
      }
    }
    if (!this.flag) return str.split('').reverse().join('');
    return str;


  }
  decrypt(message=-1, key=-1) {
    if (message === undefined || key === undefined) return Error;
    let nShifr = String(message);
    let nKey = String(key);
    nKey = ''.padStart(nShifr.length, nKey);
    let start = 'A'.charCodeAt(0);
    let str = ''
    for (let i = 0, k = 0; i < nShifr.length; i++, k++) {
      if (/[A-Z]/.test(nShifr[i])) {
        let S = nShifr[i].charCodeAt(0);
        let K = nKey[k].toUpperCase().charCodeAt(0);
        let ind = Math.abs(((S - start) - (K - start) + 26) % 26);
        str += String.fromCharCode(ind + start);
      } else {
        k--;
        str += nShifr[i];
      }
    }
    if (!this.flag) return str.split('').reverse().join('');
    return str;

  }
}

module.exports = VigenereCipheringMachine;
