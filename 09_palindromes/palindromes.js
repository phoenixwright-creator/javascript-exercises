const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.match(/[a-z]+/g);
    str = str.join("");
    let palindrome = true;
    let chars = str.split("");
    for(let i=0; i<chars.length; i++){
        if(chars[i] === chars[chars.length-(i+1)]){
            palindrome = true;
        }
        else{
            palindrome = false;
            break;
        }
    }
    return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
