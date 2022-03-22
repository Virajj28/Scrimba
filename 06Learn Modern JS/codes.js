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


//// Using rest operator w/ fncn param   ...
// const sum = (function(){
//   return function sum(x,y,z) {
//     const args = (x,y,z);
//     return args.reduce((a,b) => a+b , 0);
//   };
// })();
// console.log(sum(1,2,3));

////////////Instead use rest operator

const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4));


//// Spread operator [...]
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1]; // change this line
  arr1[0] = 'potato'
})();
console.log(arr2);


//// Destructuring Assginment to assign variables from Objects
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


//// Destructuring Assginment to assign variables from Nested Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const { tomorrow : { max : maxOfTomorrow }} = forecast; 

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); 