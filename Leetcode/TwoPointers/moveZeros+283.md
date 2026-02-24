# LeetCode 283

## Question
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

### Examples

#### Example 1
Input: nums = `[0,1,0,3,12]`   
Output: `[1,3,12,0,0]`

#### Example 2
Input: nums = `[0]`   
Output: `[0]`

## Solution O(n) Time, O(1) Space
We're asked to rearrange an array of numbers such that all `0`'s are put at the end, the constraint is O(1) space complexity so it must be done in place. This can be done with a two pointer solution similar to LeetCode 26, using a slow and a fast pointer. The slow pointer `i` and fast `j` pointer both start at index `0`, for every loop `j` will constantly scan ahead searching for new values and `i` will only iterate under certian conditions. In this case `i` will only iterate when `j` encounters a new value other than `0`. When that's found we reorganise `nums[i]` and `nums[j]` putting the new value at `i`'s index and `0` at `j` index, then continue scanning until the array is complete.

First initiate `i` at `0` as well at start the main for loop for `j` also starting at `0` as we need to check every value in the array.
```javascript
let i = 0;

for (let j = 0; j < nums.length; j++) {
}
```

Next we set the condition for iterating `i`, if a value is found at `j` not equal to `0` rearrange their position so the `0`'s are always pushed to the end of the array keeping the same order of the other values.
```javascript
if (nums[j] !== 0) {
  [nums[i], nums[j]] = = nums[j], nums[i];
  i++;
}
```

### Full Solution
```javascript
var moveZeroes = function(nums) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
};
```
