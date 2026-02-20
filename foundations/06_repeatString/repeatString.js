const repeatString = function(string, num) {
    let newString = "";
    if(num >= 0) {
        for (let i = 0; i<num; i++) {
            newString = newString.concat("", string);
        }
    }
    else {
        return 'ERROR';
    }
    return newString;

};

// Do not edit below this line
module.exports = repeatString;
