var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

// OLD FORMAT
// var a = obj.numbers.a;
// var b = obj.numbers.b;

// Write an ES2015 Version
const { numbers: { a }, numbers: { b } } = obj;


var arr = [1, 2];
var temp = arr[0];
// OLD SYNTAX
// arr[0] = arr[1];
// arr[1] = temp;

// Write an ES2015 Version
[arr[0], arr[1]] = [arr[1], arr[0]]

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });

