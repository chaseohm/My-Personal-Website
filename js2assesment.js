var numbers = [1, 2, 3, 4];
var arr = [1, 3, 5, 7, [1, 3, 5, 7]];

function getHighest (numbers) {
 return Math.max(numbers);
}
getHighest();

function getLowest(numbers) {
    return Math.min(numbers);
}
getLowest();

function sumAllNumbers(arr) {
    return arr.reduce(function(a,b){
        return a + b
    }, 0);
}

sumAllNumbers();

