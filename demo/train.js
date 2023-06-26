let input = '10 -7 4 -39 -6 12 -2';

let numbers = input.split(' ');

// console.log(numbers);

let result = [];

for (let i = numbers.length -1; i >= 0 -1; i--){
    result.push(Math.min(numbers));
    numbers.splice(numbers.indexOf(Math.min(numbers)), 1);
}
console.log(result);