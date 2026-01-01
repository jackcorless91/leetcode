# LeetCode 1004

## Question
Given a binary array nums and an integer `k`, return the maximum number of consecutive `1`'s in the array if you can flip at most `k` `0`'s.  

### Example 1  
Input: `nums = [1,1,1,0,0,0,1,1,1,1,0]`, `k = 2`  
Output: `6`  

### Explanation: 
[1,1,1,0,0,`1`,1,1,1,1,`1`] Bolded numbers were flipped from `0` to `1`. The longest subarray is underlined.

### Example 2:
Input: `nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]`, `k = 3`  
Output: `10`  
### Explanation: 
[0,0,1,1,`1`,`1`,1,1,1,`1`,1,1,0,0,0,1,1,1,1] Bolded numbers were flipped from `0` to `1`. The longest subarray is underlined.

## Solution 0(n) - Sliding Window
We are given an array of `0`'s an `1`'s, we need to find the longest streak of `1`'s in the array and we're allowed to flip `k` amount of `0`'s. This is going to use sliding window because we need a growing valid window expanding to look for the most amount of `1`'s, and we're going to keep growing as long as the `zeros` count is less than or equal to `k`. This is going to be a main for loop, iterating the `right` pointer by `1` and for every `0` the `right` pointer encounters we add it to the `zeros` count. While that count is greater than `k` we need to iterate the `left` pointer as well as subtract from the `zeros` count. For every iteration of this we recalculate the `maxLen`.

First initialise our pointer and variables at 0.
```javascript
  let left = 0;
  let maxLen = 0;
  let zeros = 0;
```

Next start the main loop, this is going to be a for loop becuase we're always exanding the window and searching all values to the `right`.
```javascript
for (let right = 0; right < nums.length; right++)
```

Now we need to keep a running count of `0`'s, everytime the `right` pointer encounters one we add it to the count.
```javascript
if (nums[right] === 0) {
            zeros++;
        }
```

This is how we're going to move the `left` pointer, while the count of `zeros` is greater than the `k` amount limit we move the `left` pointer. First we need to subtract `1` from the `zeros` count becuase after this we'll calculate the max length of the window, but we only want to the length of the valid window, if we do it before shrinking the window is invalid.
```javascript
while (zeros > k) {
    if (nums[left] === 0) {
        zeros--;
    }
    left++;
}
```

Calculate the `maxLen` against the current window length, keeping track of the longest valid window we encountered.
```javascript
maxLen = Math.max(maxLen, right - left + 1);
```

Finally return it.
```javascript
return maxLen;
```

## Full solution:
```javascript
var longestOnes = function(nums, k) {
    let left = 0;
    let maxLen = 0;
    let zeros = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeros++;
        }

        while (zeros > k) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};
```