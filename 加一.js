/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = 0;
    let arr = [];
    let lastPos = 1;
    for (let index = 0; index < digits.length; index++) {
        num = digits[digits.length - 1 - index];
        num += lastPos;
        if(num === 10){
            lastPos = 1;
            arr.splice(0,0,0);
        }else{
            lastPos = 0;
            arr.splice(0,0,num);
        }
    }
    if(lastPos == 1){
        arr.splice(0,0,1);
    }
    return arr;
};