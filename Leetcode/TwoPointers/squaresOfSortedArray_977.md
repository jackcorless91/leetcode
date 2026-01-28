# Leetcode 977

## Question:
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

## Examples:
### Example 1:

Input: ```nums = [-4,-1,0,3,10]```   
Output: `````[0,1,9,16,100]`````
### Explanation: 
After squaring, the array becomes `````[16,1,0,9,100]`````.
After sorting, it becomes `````[0,1,9,16,100]`````.
### Example 2:

Input: ```nums = [-7,-3,2,3,11]```  
Output: ```[4,9,9,49,121]```

## O(n log n) solution:
The first solution to this I came with is initialising an empty result array, looping through
```nums``` and square each value. After the loop sort the result array is ascending order. 
```javascript
var sortedSquares = function(nums) {
  let sorted = [];

  for (let i = 0; i < nums.length; i ++) {
    sorted.push(nums[i] ** 2);
  } return sorted.sort((a, b) => a - b);
};
```
This uses sorting, which is 0(n log n). 

## O(n) Solution - two pointer
Given that we have the input array already sorted it makes it possible to square and append our result array in one step, keeping it 0(n) with a two pointer solution.  
Fundamentally we know squared numbers always result in a positive result, this means we need to compare absolute values (distance from 0) rather than just a comparative operator, ```-10 < 3``` but after squaring we have ```100``` and ```9```. With this information we know to compare absolute values and which ever is larger, we square and increment ```i``` or decrement ```k``` accordingly, and append the largest result to the end of the ```res``` array.

First we initialise i and j at the start and end of ```nums```.
```javascript
let i = 0;
let j = nums.length - 1;
```
Now we initialise the ```res``` array, unlike the 0(nlog n) solution we're not initialising it as an empty undefined array. Instead we do it for the length of nums, creating a set length array with empty slots waiting to be filled.  
We also need a writing pointer, ```k```. This will allow the values to be append from right to left and will decrement by 1, ```k--``` for every loop. 
```javascript
let res = new Array(nums.length);
let k = nums.length - 1;
```
The loop its self will run ```while (i <= j)```.  
We then compare the absolute values of ```nums[i]``` and ```nums[j]``` and square whichever value is larger and save the result to `res[k]`, as well as either incrementing `i` or decrementing `k` respectively. and for every iteration we decrement `k` to write to next avalible slot to the left of the last written value.
```javascript
while (i <= j) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            res[k] = nums[i] ** 2;
            i++
        } else {
            res[k] = nums[j] ** 2;
            j--;
        }
        k--;
    }
```
Finally, return the result array.  
```javascript
return res;
```
## Full code:
```javascript
var sortedSquares = function(nums) {
    let i = 0;
    let j = nums.length - 1;

    let res = new Array(nums.length);
    let k = nums.length - 1;

    while (i <= j) {
        if (Math.a
          bs(nums[i]) > Math.abs(nums[j])) {
            res[k] = nums[i] ** 2;
            i++
        } else {
            res[k] = nums[j] ** 2;
            j--;
        }
        k--;
    }
    return res;
}
```

