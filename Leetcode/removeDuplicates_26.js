// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//
//   Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
//
//   The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.


// Example 1:
//
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
//   It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:
//
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
//   It does not matter what you leave beyond the returned k (hence they are underscores).

// Knowing this has to be done in place means i can't create a new unque set or something similar. My first thought is just a yucky brute force solution O(n^2). A nested for loop comparing each element to every other element in the input array searching for duplicate values. if we find two matching values with splice the array from the jth position by 1 and j-- to set our count back by one as we removed an element. return the nums.length after we removed them all.
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }
  return nums.length
};

// another solution. 0(n) two pointers
// Much more time efficient solution is using two pointers. This concept took way too long to understand.
// What we're trying to do is keep track of duplicates by only counting unique numbers without using a new set / array. We do this by using a slow count and a fast counter, i and j. comparing two numbers at a time, going through the whole array without a nested loop.
// using two pointers i & j, start i at index 0 and j at index 1. for every loop j++ regardless, but i++ only when nums[i] !== nums[j], this will also make nums[i] = nums[j].

var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

