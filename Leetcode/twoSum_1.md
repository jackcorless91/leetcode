# LeetCode 1

## Question
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Examples
### Example 1
Input: `nums = [2,7,11,15], target = 9`  
Output: `[0,1]`  
### Explanation: 
Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.   

## 0(n^2) Solution
The first solution is te simplest and quadratic, a nested for loop. We are asked to return the indices of `nums[i]` that add up to the target, this can be done by comparing each value to every other value in the array brute forcing the solution.   

First init the outer loop `i`.
```javascript
for (let i = 0; i < nums.length; i++)
```

Then the inner loop `j`, starting at `i + 1` so we're not comparing values to themselves.
```javascript
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
  }
}
```

Finally if the sum of `nums[i]` and `nums[j]` is equal to target return their indices.
```javascript
if (nums[i] + nums[j] === target) {
  return [i, j];
}
```

### Full 0(n^2) Solution
```javascript
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
        break;
      }
    }
  }
};
```

## 0(n) Solution
We don't need to compare every value in the array, given the `target` we know that the number we need is equal to the target minus nums[i], `numberNeeded = target - nums[i]`. So we need to keep a list of all numbers and indices in the array to then compare to each value of the array using the formula above.
This can be done with a map by pushing kep values pairs of `nums[i]` and their `index`.

First initialise an empty object, `numberToIndex` and loop through the array assigning key value pairs of `nums[i]` and `index`. This question specifies there is exactly one solution meaning there will be no duplicates in the input array, but if there were it would be overwritten by the next instance of that value.
```javascript
const numberToIndex = {}

for (let i = 0; i < nums.length; i++) {
  numberToIndex[nums[i]] = i;
}
```

Next in the main loop we're going to check the formula `numberNeeded = target - nums[i]`.
```javascript
for (let i = 0; i < nums.length; i++) {
  const numberNeeded = target - nums[i];
}
```

Now we need to check if numberNeeded is in map, and make sure we're not using the same value twice. If both conditions are true we return the pair in indices.
```javascript
if (numberToIndex[numberNeeded] !== undefined && numberToIndex[numberNeeded] !== i) {
  return [i, numberToIndex[numberNeeded]]
}
```

## Full 0(n) Solution
```javascript
var twoSum = function(nums, target) {
    const numberToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        numberToIndex[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const numberNeeded = target - nums[i];

        if (numberToIndex[numberNeeded] !== undefined && numberToIndex[numberNeeded] !== i) 
        return [i, numberToIndex[numberNeeded]];

    }
};
```
