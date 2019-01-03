/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if(s.length > 0){
        let arr = '';
        for (let index = 0; index < s.length; index++) {
            const element = s[s.length-1 - index];
            arr += element;
            
        }
        return arr;
    }
    
    return s;
};