# LeetCode 26

## Question
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

### Examples

#### Example 1
Input: nums = `[1,1,2]`    
Output: 2, nums = `[1,2,_]`

#### Explanation
Your function should return `k = 2`, with the first two elements of `nums` being `1` and `2` respectively.
It does not matter what you leave beyond the returned `k` (hence they are underscores).

#### Example 2
Input: nums = `[0,0,1,1,1,2,2,3,3,4]`   
Output: 5, nums = `[0,1,2,3,4,_,_,_,_,_]`

#### Explanation
Your function should return `k = 5`, with the first five elements of nums being `0, 1, 2, 3`, and `4` respectively.
It does not matter what you leave beyond the returned `k` (hence they are underscores).

## Solution O(n)
We're going to run through the O(n) solution to this problem. We're asked to filter out duplicate values in place, meaning no resorting, creating new arrays only O(1) space can be used. 
It's a very wordy question and all we need to do is return the number if unique elements, the custom judge does its own calculations to return the input array. 
This can be done with a two pointer solution, using a slow and fast pointer. the fast pointer searches for new values with every loop always iterating forward and the slow pointer only moves forward when certain condition are met. In our case the condition is when `j` (fast pointer) finds a value that's not equal to the slow (a new value), when this happens we do 2 operations, we iterate the `i` (slow pointer) forward as well as write the new value we've discovered to `i`. This ensures we removes all duplicates. 
Take the example array `[0, 0, 1]`, `i` is at value `0` at index `0`, `j` is at value `0` index `1`, they are equal so we do nothing, next loop, `i` is still at index `0` and `j` is at value `1` index `2`, they are not equal. So first we iterate `i` forward to index `1` as well as write the value we found to `i` replacing the second value `0` with `1`. The final array is `[0, 1]`.
We return the ans as the final array length `+ 1` as a it's a `0` index array.

First initlaise the slow pointer at `0` and start the main loop with `j` starting at index `1` and running for the lenght of the input array `nums`.
```javascript
let i = 0;

for (let j = 1, j < nums.length; j++) {
}
```

Now that `j` will be iterating for every loop we need to set the condition for `i`, so if `i` is equal to `j` we do nothing so no code is needed, it just loops again and iterates `j`, but if `i` is not equal to `j`, iterate `i` and write `j`'s value to `i`.
```javascript
for (let j = 1; j < nums.length; j++) {
  if (nums[j] !== nums[i]) {
    i++;
    nums[i] = nums[j];
  }
}
```

Finally return the length of the modified array + 1.
```javascript
return nums + 1;
```

### Full O(n) Solution
```javascript
var removeDuplicates = function(nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
```