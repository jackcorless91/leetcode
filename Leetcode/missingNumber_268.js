// Given an array nums containing n distinct numebrs in the range [0, n], return the only number in the range that is missing from the array.
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// go through an array of numbers and work out the total number of indicies and find the missing element currently that not there between 0 and n.
// first workout the sum of the all that numbers that should be in the array and save it to sum with let sum = n * (n + 1) / 2; where n 0 = nums.length.
// workout the actual total and the difference is the missing number. time complexity = O(N)
var missingNumber = function(nums) {
  let n = nums.length;
  let sum = n * (n + 1) / 2;
  let total = 0;

  nums.forEach(num => {
    total += num;
  });

  return sum - total;
};

// XOR solution
var missingNumber = function(nums) {
  let xor = 0;

  // XOR all expected numbers: 0, 1, 2, ..., n
  for (let i = 0; i <= nums.length; i++) {
    xor = xor ^ i;
  }

  // XOR all actual numbers from the array
  for (let num of nums) {
    xor = xor ^ num;
  }

  return xor;
};

// study more XOR