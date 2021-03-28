const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  try {
    if(!Array.isArray(arr)) throw new Error;
  } catch (error) {
    console.log(error);
  }
  let map = new Map([["--discard-next",0],["--discard-prev",1],["--double-next",2],["--double-prev",3]]);
  let array = new Array();
  let hasPre=true;
  for(let i=0;i<arr.length;i++){
    
      switch (map.get(arr[i])) {
        case 0:{
          if(typeof arr[i+1] === 'number'){
            hasPre=false;
            i++;
          }
          break;
        }
        case 1:{
          if(hasPre && typeof arr[i-1] === 'number'){
            array.pop();
          }
          break;
        }
        case 2:{
          if(typeof arr[i+1] === 'number'){
            array.push(arr[i+1]);
            array.push(arr[i+1]);
            i++;
          }
          break;
        }
        case 3:{
          if(hasPre && typeof arr[i-1] === 'number'){
            array.push(arr[i-1]);
            array.push(arr[i-1]);
          }
          break;
        }
        default:
          if(!typeof arr[i] === 'number') break;
          array.push(arr[i]);
          hasPre=true;
          break;
      }
    
  }
  return array;
};
