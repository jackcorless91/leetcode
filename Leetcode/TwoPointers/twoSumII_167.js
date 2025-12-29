// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
//   Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
//   Your solution must use only constant extra space.
//
//   Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

//   Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Our solution must be returned as an array of the indices that equal the target + 1, because it's a 1 indexed array unlike usual 0 indexed array (starting int is counted as 1 rather 0).
// This is going to be a two pointer solution. An important not is it's already sorted in ascending order for us. We're going to init i at 0 and j at numbers.length - 1. we're looking for the target which is the sum of two of the integers. we need 3 rules in our two pointer; if the sum is equal to the target return the indices + 1, if the sum is less than the target i++, if the sum is greater than the target j--. This is because i is our smalled number and j is the largest, We know if the numbers too small we need a bigger number and j already IS the biggest number so we move i up to the next int, just like how if the sum is too big we must using a smaller int for j.
var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] + numbers[j];

    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
};