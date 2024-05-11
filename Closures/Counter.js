/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let counter = n;

  return function () {
    const current = counter;
    counter++;
    return current;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
var createTwo = function (n) {
  let counter2 = n;
  return function () {
    const current = counter2;
    counter2--;
    return current;
  };
};
