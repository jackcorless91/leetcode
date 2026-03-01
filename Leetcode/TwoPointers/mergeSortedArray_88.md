# LeetCode 88

## Question
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

### Examples

#### Example 1
Input: `nums1 = [1,2,3,0,0,0]`, `m = 3`, `nums2 = [2,5,6]`, `n = 3`   
Output: `[1,2,2,3,5,6]`

#### Explanation
The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

#### Example 

#### Explanation
Input: `nums1 = [1]`, `m = 1`, `nums2 = []``, `n = 0`
Output: `[1]`

## Solution O(n), O(m+n)
A very wordy question but we're asked to merge 2 sorted arrays together, merged into `nums1` which has the length of both arrays combined or `m + n` length, this will use O(m + n) space and O(n) time as we're using a two, technically 3 pointer approach not need to use sorting functions.
To merge 2 arrays while sorting in place we need 3 pointers, they will all be initialised at the end of the array, `i` will start at the end of `nums1` or equal to `m`, `j` will start at the end of `nums2` or equal to `n` and `k` will start at length `m + n` start our final array. 
Fundamentally we'll be fill the result from largest to smallest as we don't want to overwrite values, we compare `nums1[i]` to `nums2[j]` and whichever is larger we write to `nums1[k]`, this ensures the largest value is always written to the end, after we decrement whichever value is larger as well as `k` for every loop, this will run while `i` and `j` are both equal to or larger and `0`.
After the loop we may have leftover values in `nums2`, so in a second loop we let it run while `j` is greater than or equal to `0`, while this is running write all remaining values to `k` and after each loop decrement both to fill all remaning places.

First init the three pointers at the end of the arrays.
```javascript
let i = m - 1;
let j = n - 1;
let k = m + n - 1;
```

Next start the main loop, this will run while `i` and `j` are both greater than or equal to `j`, this is becuase we can only compare values if both arrays still have values left, if `nums2` still has leftover values we handle that in the next loop.
```javascript
while (i >= 0 && j >= 0) {
}
```

Next start the comparison. For each loop we check which is larger, whichever is larger gets written to `nums[k]` and its index is decremented as well as `k`'s. 
```javascript
if (nums2[j] < nums1[i]) {
  nums1[k] = nums1[i];
  i--;
  k--;
} else {
  nums1[k] = nums2[j];
  j--;
  k--;
}
```

Finally after the loop completes we need to handle the remaining values of `nums2` of there are any. This loop will run as long as there are values in the array, if there are write them to `nums[k]` as well as decrement both indices.
```javascript
while (j >= 0) {
  nums1[k] = nums2[j];
  j--;
  k--;
}
```

### Full Solutiom
```javascript
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums2[j] < nums1[i]) {
            nums1[k] = nums1[i];
            i--;
            k--;
        } else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};
```