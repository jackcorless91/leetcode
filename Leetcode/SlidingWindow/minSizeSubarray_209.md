# Leetcode 209

## Question
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

### Example 1:
Input: `target = 7`, `nums = [2,3,1,2,4,3]`  
Output: `2  `
### Explanation: 
The subarray `[4,3]` has the minimal length under the problem constraint.   

### Example 2:
Input: `target = 4`, `nums = [1,4,4]`  
Output: `1`

## Solution 0(n) - Sliding window
Sliding window with `left` and `right` pointers. We need to find the minimum length of a subarray that adds up to the target, we use a sliding window that grows to become valid and shrinks to become optimal. A main loop iterating the `right` pointer by `1` for every loop alwaya growing the window, inside a while loop checking if the `sum` is greater than or equal to the `target`, while this is true recalculate the `minLen`, shrink the window until we have optimal validity.   

First we'll initialise some variables, the `left` pointer, the `sum` and the `minLen`. `minLen` will start at `Infinity`, this is becuase during our while loop we'll be checking the minimum length with `Math.min`. If we init with 0, then `Math.min(0, new length)` the result will be always be 0 so using infinity will allow any actual value compared to be less and written to `minLen`.
```javascript
    let left = 0;
    let sum = 0;
    let minLen = Infinity;
```

Next we start the main for loop, iterating the `right` pointer for every iteration for the length of input array.
```javascript
for (let right = 0; right < nums.length; right++)
```

For every loop of that we reculate the `sum` with the next position read the `right` pointer.
```javascript
 sum += nums[right];
```

The inner while loop will as long as the `sum` is greater than or equal to the `target`, allowing us the continue shrinking the window. We recalculate the `minLen` against it's last value, subtract the previous `left` value and iterate `left` by `1`.


After the loops we check `minLen`, if its value is still equal to `Infinity` we know there are no valid subarrays and the result is `0`, otherwise return the value of `minLen`.
```javascript
if (minLen === Infinity) {
            return 0;
    } else {
        return minLen;
    }
```

## Full solution:
```javascript
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    if (minLen === Infinity) {
            return 0;
    } else {
        return minLen;
    }
};
```