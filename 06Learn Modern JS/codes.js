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


//// Destructuring Assginment to assign variables from Arrays
// empty space comma is highlight
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);


let a = 8, b = 6;
(() => {
  "use strict";
  [a, b] = [b, a]
})();
console.log(a); 
console.log(b); 


//// Destructuring Assginment with rest operator to reassign array elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [ , , ...arr] = list; 

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); 
console.log(source);


//// Destructuring Assginment with rest operator to pass an object as a function's parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {

  // return function half(stats) {     ////using destructuring when a[i request has lot moredata you need
  return function half ({max, min}){
    return (max + min) / 2.0;
  };

})();
console.log(stats); 
console.log(half(stats)); 


//// Create strings using template literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
  }

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)


//// Write concise object literal using simple fields
const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male")); 


//// Use class syntax to define a constructor function
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

//2
function makeClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); 



//// Using getters and setters to control access to an object
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature; 
console.log(temp);



//// Learning import and getting difference betn import and require

// => In string_functions.js code 
export const capitalizeString = str => str.toUpperCase()

// => In indexedDB.js code
import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");

console.log(cap);


//// Exporting to reuse code
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString }; // Exporting a function

// Exporting a variable
export const foo = "bar";
export const bar = "foo";


//// Use * to import everything from a file
import * as capitalizeStrings from "capitalize_strings";


//// Create an export fallback w/ export default
export default function subtract(x,y) {return x - y;}
