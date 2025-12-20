// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
//
//   Example 1:
//
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
//   After sorting, it becomes [0,1,9,16,100].
//   Example 2:
//
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Being an 'easy' question my first thr\ought is a simple 0(n log n) solution. This can be done by init an empty array for the solution and loop through the array squaring every value and then returning the array after resorting in ascending order. But resorting the array slows us down a lot, there's a way to square them in place push them to a new array.

var sortedSquares = function(nums) {
  let sorted = [];

  for (let i = 0; i < nums.length; i ++) {
    sorted.push(nums[i] ** 2);
  } return sorted.sort((a, b) => a - b);
};

// 0(n) Two pointer solution:
// init i and j at start and end of the array and also init the result array with new Array(nums.length), unlike init empty array of undefined values this creates a new array with a fixed length of empty positions equal to the length of nums.
// Now we compare of nums[i] and nums[j], some numbers are negative but knowing a squared number alway equals a positive helps us to know we need to compare their absolute values (distance from 0) rather than comparing them at face value. Because technically -10 < 3, but after squaring 100 is much bigger than 9. k will always push the next largest values to the left of the previous largest value.
//
var sortedSquares = function(nums) {
  let i = 0;
  let j = nums.length - 1;

  let res = new Array(nums.length);
  let k = nums.length - 1;

  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      res[k] = nums[i] ** 2;
      i++
    } else {
      res[k] = nums[j] ** 2;
      j--;
    }
    k--;
  }
  return res;

}