# LeetCode 121

## Question
You are given an array prices where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Examples

#### Example 1
Input: prices = `[7,1,5,3,6,4]`   
Output: `5`

#### Explanation
Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

#### Example 2
Input: prices = `[7,6,4,3,1]`   
Output: `0`

#### Explanation
In this case, no transactions are done and the max profit = 0.

## Solution O(n)
We need to find the largest difference between two integers in the array, looking for best buy and sell times. We need a way to recheck the highest difference and return that as the solution, this can be done with a two pointer solution. Given two pointers, `left` and `right`, right is always searching for the next integer and left will only move forward under the condition that profit is less than `0`. For each loop we will recalculate the `maxProfit` by comparing the most recent saved value with `profit` which is `right - left`, finally after the loop is complete we will have the maximum profit, looping through the array only once is time complexity of O(prices) or O(n).

First initialise the left pointer as well as `maxProfit` at `0`.
```javascript
let left = 0;
let maxProfit = 0;
```

Now start the main loop, a for loop iterating `right` over `prices` starting at `1` so we don't compare the same value to itself at the start of the loop.
Inside calculate profit, which is the `right - left.`
```javascript
for (let right = 1; right < prices.length; right++) {
  let profit = prices[right] - prices[left];
}
```

For every loop iteration we want to recalculate `maxProfit` with `Math.max`, comparing the previously saved value with the newly calculated value of the current two pointers.
We also set the condition for moving the `left` pointer, when `profit` is less than `0`.
```javascript
maxProfit = Math.max(maxProfit, profit);

if (profit < 0) {
  left = right;
}
```

Finally return the value of `maxProfit`.
```javascript
return maxProfit
```

### Full Solution
```javascript
var maxProfit = function(prices) {
    let left = 0;
    let mfaxProfit = 0;

    for (let right = 1; right < prices.length; right++) {
        let profit = prices[right] - prices[left];

        maxProfit = Math.max(maxProfit, profit);

        if (profit < 0) {
            left = right;
        }
    };
    return maxProfit;
};
```




