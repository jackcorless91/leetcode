// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
//
//   Example 1:
//
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:
//
// Input: nums = [1,1]
// Output: [2]

// convert array to a set to remove the duplicates. Because our range is [1, n] each value has to be in the nums array, if its not we push it to the new array.
// created set of nums, create empty answer array. Iterate through the new set looking for each number 1 to n. if that integer doesn't appear push it to the ans array.
// Time complexity is O(n) - linear. not optimal time complexity but that low key doesn't matter bc im a rookie lol.
// Optimal time complexity would be marking the integers in their own place making it O(1). each integer being between 1 and n helps us because it refernces its own index. we'd iterate through the array mark what indices are present with -1 flipping the value to negative showing they've been visited. We now have our integers that are missing from the array. loop through again and 1 to the index to find the value and push to the answer array. No idea how to code it but there we go
var findDisappearedNumbers = function(nums) {
  const set = new Set(nums);
  const ans = [];

  for (let i = 1; i <= nums.length; i ++) {
    if (!set.has(i)) {
      ans.push(i)
    }
  }
  return ans;
};