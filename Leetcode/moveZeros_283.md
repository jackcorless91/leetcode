# Leetcode 283

## Question:
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

### Example 1:

Input: `nums = [0,1,0,3,12]`  
Output:` [1,3,12,0,0]`

### Example 2:

Input: `nums = [0]`  
Output:` [0]`

## 0(n) Solution:
As stated this must be completed in place with 0(1) space complexity. This solution is going to follow a two pointer approach, with a `slow` and a `fast` pointer, with `i` being our `slow`, write pointer, and `j` being our `fast` read pointer.   
We'll need two seperate loops: one to place all the elements at the beginning and one to put all zeros after `i`, or after w've ensured everyhting `[0... i -1]` is definitively not 0.  



We'll initialise `i` at 0, as well as `j` to ensure we're checking every element. For each iteration of the loop `j` will check the next element, once we find an instance of `j` not equaling 0, we write that value to `i` as well as increment it by 1. This ensures at any given time all elements before `i` have already been written. 
```javascript
let i = 0;
 
for (let j = 0; j < nums.length; j++) {
  if (nums[j] !== 0) {
     nums[i] = nums[j];
     i++;
  }
}
```
After the loops complete and every value other than 0 has been written before `i` we can now make every element after `i` equal 0.
```javascript
while (i < nums.length) {
  nums[i] = 0;
  i++;
}
```
## Full Code:
```javascript
var moveZeroes = function(nums) {
    let i = 0;
     
     for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        } 
     }
     while (i < nums.length) {
        nums[i] = 0;
        i++;
     }
};
```