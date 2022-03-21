// Mutate an array declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  //s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace();

console.log(s)


// Arrow Functions Concise with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));


// Writing HOC i.e. map,filter,reduce
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


/// Set default parameters for functions
const increment = (function() {
  return function increment(number, value=1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); 
console.log(increment(5)); 


//// Using rest operator w/ fncn param
const sum = (function(){
  return function sum(x,y,z) {
    const args = (x,y,z);
    return args.reduce((a,b) => a+b , 0);
  };
})();
console.log(sum(1,2,3));

////////////Instead use rest operator

const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4));