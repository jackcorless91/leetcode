# LeetCode 167

## Question
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers index1 and index2, each incremented by one, as an integer array ```[index1, index2]` of length `2`.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

### Examples

#### Example 1
Input: numbers = `[2,7,11,15]`, target = `9`   
Output: `[1,2]`

#### Explanation
The sum of `2` and `7` is `9`. Therefore, `index1 = 1`, `index2 = 2`. We return `[1, 2]`.

#### Example 2
Input: numbers = `[2,3,4]`, target = `6`   
Output: `[1,3]`

#### Explanation
The sum of `2` and `4` is `6`. Therefore `index1 = 1`, `index2 = 3`. We return `[1, 3]`.

## Solution O(n) time O(1) space
Expanding on the original two sum we're asked to return a pair of indices that sum up to the target. This needs to be done in constant space O(1). This can be done with a two pointer solution using left and right pointers. Both pointers start at the beginning and the end, `i = 0`, `j = nums.length - 1`. The main loop will be a while loop as both pointers only move under specific conditions.
Due to the array already being sorted in ascending order we know that to make our `sum` (`sum = numbers[i] + numbers[j]`) smaller we need to use smaller numbers and to make it larger we need larger numbers, so if the `sum` is greater than the `target` we know if we decrement `j` we'll get a smaller result, and `i` will only increment if the `sum` is less the `target` making it larger. Finally when returning add `1` to both `i` and `j`'s indices as it's a `1` indexed array.

First initialise `i` and `j` at the beginning and the end of the input array.
```javascript
let i = 0;
let j = numbers.length - 1;
```

Next start the main while loop, this will run while `i` is less than `j` allowing us to compare every number pair we need. Also create the `sum` variable of `i` and `j`.
```javascript
while (i < j) {
  let sum = numbers[i] + numbers[j];
}
```

Inside the loop we set the conditions for incrementing `i` and decrementing `j`, if the sum is greater than the `target`, we decrement `j`, if the `sum` is less than the `target` increment `i`.
Once we find the `sum` that equals the `target`, return their indices as an array, we add `1` due to it being an `0` indexed array.
```javascript
if (sum === target) {
  return [i + 1, j + 1]
} else if (sum < target) {
  i++;
} else if (sum > target) {
  j--;
}
```

### Full Solution
```javascript
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        let sum = numbers[i] + numbers[j];

        if (sum === target) {
            return [i + 1, j + 1];
        } else if (sum < target) {
            i++;
        } else if (sum > target) {
            j--;
        }
    }
};
```
