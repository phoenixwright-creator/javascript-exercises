const fibonacci = function(num) {
    if(num<0){
        return "OOPS";
    }
    else if(num === 0){
        return 0;
    }
    else if(num === 1){
        return 1;
    }
    else{
        let fibonacciArr = [0, 1];
        for(let i=2; i<=num; i++){
            fibonacciArr[i] = fibonacciArr[i-1] + fibonacciArr[i-2];
        }
        console.log(fibonacciArr);
        return fibonacciArr[fibonacciArr.length-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
