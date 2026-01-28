# LeetCode 217

## Question
Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Examples

#### Example 1
`Input: nums = [1,2,3,1]`  
`Output: true`

#### Explanation
The element 1 occurs at the indices 0 and 3.

#### Example 2
`Input: nums = [1,2,3,4]`   
`Output: false`

#### Explanation
All elements are distinct.

## Solution O(n)
We need to return `true` or `false` depending on whether duplicates are present in `nums`. We need a way of keeping track of the integers and their count/boolean for being seen once or twice. This can be done with a `Map`. We loop through `nums` and and check if each value is already in the `Map`, if it is we return `true`, if it's not we add it to the `Map`. If after iterating through the entire array we don't find any duplicates, return `false`.

First init an empty `Map`.
```javascript
const map = new Map;
```

Next we start the main loop. Iterating through `nums` starting at `0` and ending at the length of the input array.
```javascript
for (let i = 0; i < nums.length; i++) {
}
```

Inside our main loop we set the first condition to check if `map` already contains `nums[i]`, if it does return `true`.
```javascript
if (map.has(nums[i])) {
  return true;
}
```

If `nums[i]` is not in the `map` we add it in with the value as `true`. This doesn't have to be a boolean it could be a count like `1`, it's just to keep track of how many of the specific integer we've seen.
```javascript
else {
  map.set(nums[i], true)
}
```

Finally return `false` if after iterating througn the entire array there are no duplicates.
```javascript
return false;
```

## Full Solution
```javascript
var containsDuplicate = function(nums) {
    const map = new Map;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true;
        } else {
            map.set(nums[i], true);
        }
    }
    return false;
};
```