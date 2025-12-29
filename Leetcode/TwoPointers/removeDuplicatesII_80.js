// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
//
//   Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
//
//   Return k after placing the final result in the first k slots of nums.
//   Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
//
//   Example 1:
//
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
//   It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
//
// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
//   It does not matter what you leave beyond the returned k (hence they are underscores).

// This solution is very similar to the 0(n) solution to Leetcode 26 remove duplicates 1. We must return the answer without creating a new array and only using 0(1) space complexity. We use the 2 pointer solution with a slow and fast pointer. We're now allowing 2 duplicates of each number. So with i as a slow a pointer and j as a fast we'll init them both at 2. This is because instead of comparing i to j and if they're not equal i++ and nums[i]= nums[j], we need to compare it to nums[i - 1]. We're only going to move our slow pointer if the previous value of i is not equal to j. This ensures that we allow each element to appear exactly twice. and finally unlike leetcode 26 we return i, not i + 1. This is because we're returning the last valid index, not converting the index to length.
// solution is 0(n) Time, 0(10 space.
var removeDuplicates = function(nums) {
  if (nums.length <= 2) return nums.length;

  let i = 2;
  for (let j = 2; j < nums.length; j++) {
    if (nums[i - 2] !== nums[j]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
