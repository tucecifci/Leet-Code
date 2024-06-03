/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};

// To solve the problem of reducing an array with a custom function without using the built-in Array.reduce method, we can iterate through the array and apply the reducer function sequentially to accumulate the result. Here’s how you can achieve that:

// Initialize the result with the initial value init.
// Loop through each element of the array.
// Apply the reducer function fn to the current result and the current array element.
// Update the result with the value returned by the reducer function.
// Return the final result after the loop completes.
