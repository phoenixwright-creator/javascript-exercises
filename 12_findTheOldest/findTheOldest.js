const findTheOldest = function(arr) {
    for (let item in arr){
        if("yearOfDeath" in arr[item] === false){
            arr[item].yearOfDeath = 2021;
        }
    }
    let ages = arr.map(item => {
        return ({
            name: item.name,
            age: (item.yearOfDeath - item.yearOfBirth)
        });
    })
    .sort((a, b) => a.age > b.age ? -1 : 1);
    return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;
