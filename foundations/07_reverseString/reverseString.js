const reverseString = function(str) {
    let reversedStr = str.split("");
    reversedStr = reversedStr.reverse();
    reversedStr = reversedStr.join("");
    return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
