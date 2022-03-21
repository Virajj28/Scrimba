### Differences between var and let keywords.
`let` does not let you declared variable twice.

"use strict"; //Enables strict mode captures coding mistakes and unsafe options


### Scopes of var and let
Use let mostly as what we define with let only stays unders area of scope {}

### Declare read-only variable with the const keyword
It acts same as let but it's also read-only. You cannot reassign a const.
And when using it's very to use name as capitals.

function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");

### Prevent Object Mutation
  Object.freeze(MATH_CONSTANTS);
