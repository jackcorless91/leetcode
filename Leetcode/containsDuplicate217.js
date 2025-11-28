// Given an integer array nums, return true if any values appears at least twice in the array, and return false if every element if distinct.

// example
// Input: nums =  [1,2,3,1]
// Output: True
// 1 occur at indices 0 and 3.

// example
// Input: nums =  [1,2,3,4]
// Output: False
// All elements are distinct

// solution: Nested for loop comparing each element to itself starting at i + 1, if statement to return True / false.
// Time complexity: O(N^2) - Quadratic

var containsDuplicate = function(nums) {
  let isDup = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i]=== nums[j]) {
        isDup = true;
        break;
      }
    }
  }
  return isDup;
};

// solution using a set.
// Set is a data type used for storing collections of data.
// Can only contain unique values. Checks if something exists extremely fast = O(N) time complexity

// Create an empty set
// Go through each number in the array
// For every number: if its already in the set > its a duplicate > return true || if its not in the set > add to set
// if loop finishes without returning > no duplicates exist
var containsDuplicate = function(nums) {
  let duplicates = new Set();
  for (const num of nums) {
    if (duplicates.has(num)) {
      return true;
    }
    duplicates.add(num);
  }
  return false;
};