// given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//   You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//   You can return the answer in any order.
//
//   Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//   Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// first solution time: Quadratic. Nested for loop comparing each value to every other value and pushing the result to ans array.
var twoSum = function(nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j)
        break;
      }
    }
  }
  return result;
};

// o(n) time complexity solution;
// Instead of comparing each value to every other value in the array we can create a map of key value pairs (number + its index) so all we need to do is iterate through our nums array, this is because we know that our numherNeeded = target - nums[i].
// initialise empty map, iterate over the input array, save each number as the key and the index as value. If we see the same index twice overwrite it with the new, map will contain most recent instances of the number. once we have it we return the indices of those values.
// second loop iterates through the input array comparing i (excluding its self) to each key in the map we created. searching for what two numbers sum equal our target.
var twoSum = function(nums, target) {
  const numberToIndex = {};

  for (let i = 0; i < nums.length; i++) {
    numberToIndex[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const numberNeeded = target - nums[i];

    if (numberToIndex[numberNeeded] !== undefined && numberToIndex[numberNeeded] !== i) {
      return [i, numberToIndex[numberNeeded]]
    }
  }

};

// This could also be done in a single loop but i really struggle to fully understand it.
// Instead of instantiating a numberToIndex map of all our values we instead only push each values as its checked. So looping through the input example nums = [2,11,7,15], we check the number 2 in our map for numberNeeded = target - nums[i], if its not there we push that to our map and move to the next value, 11. check numberNeeded = target - nums[i] looking for the value in the map. no ? push that to our map. Third value 7, numberNeeded = target - nums[i] ? yes with our first value 2. return the indices of both.
var twoSum = function(nums, target) {
  let numberToIndex = {};

  for (let i = 0; i < nums.length; i++) {
    const numberNeeded = target - nums[i];

    if (numberToIndex[numberNeeded] !== undefined) {
      return [i, numberToIndex[numberNeeded]]
    }
    numberToIndex[nums[i]] = i;
  }

};