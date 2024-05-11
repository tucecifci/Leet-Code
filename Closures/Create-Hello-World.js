// /**
//  * @return {Function}
//  */
// var createHelloWorld = function() {

//     return function(...args) {

//     }
// };

// /**
//  * const f = createHelloWorld();
//  * f(); // "Hello World"
//  */
function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}
console.log(createHelloWorld());

function caseTwo() {}
