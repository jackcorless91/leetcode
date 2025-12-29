# Leetcode 3

## Question
Given a string s, find the length of the longest substring without duplicate characters.  

### Example 1:

Input: `s = "abcabcbb"`  
Output: `3`  
#### Explanation: 
The answer is "abc", with the length of `3`. Note that `"bca"` and `"cab"` are also correct answers.
### Example 2:

Input: `s = "bbbbb"`  
Output: `1`  
#### Explanation: 
The answer is `"b"`, with the length of `1`.

## Solution 0(n) - with Set
This is a sliding window solution. Two points, `left` and `right` maintaining a contiguous range. It is always either growing or shrinking.  
For this solution we need to maintain a valid window containing no duplicates, `s[left... right]`. If this invarient breaks we move `left` pointer until it's valid again. To detect duplicates we'll save them as a `Set`, for each new character seen by `right` save it to the set and update `maxLen` (max length of the valid window), if it's already there remove `s[left]` and `left++`.
`right` is always moving and searching through every character expanding the window, `left` only moves when the windows becomes invalid.   

First initialise the start point of `left`, the empty `Set` and `maxLen`.
```javascript
    let left = 0;
    let seen = new Set();
    let maxLen = 0;
```

Next start for the `for loop` of the right pointer, it will always be incrementing. Run it until it reaches the length of `s`.
```javascript
for (let right = 0; right < s.length; right++)
```

Inside the loop we run our second loop, This will check for duplicates and delete them from the `seen` and update the window by moving `left` until it's valid again.
```javascript
for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        };
```
Now update `seen` with the new characters of `right` and update `maxLen` based on which is the longer, its current value or the new length of the window.
```javascript
seen.add(s[right]);
maxLen = Math.max(maxLen, right - left + 1);
```

Finally return `maxlen`.
```javascript
return maxLen;
```

## Full solution:
```javascript
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let seen = new Set();
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        };

        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);

        }
        return maxLen;
}
```

## Solution 0(n) - with Map

The main differnce is now we'll be storing key value pairs rather than just keys. This means instead of remove a duplicate when we find one then incrementing `left` we do it in one step by just jumping past te last instance of a duplicate.   

Initialise everything again but empty `Map` instead of `Set`. 
```javascript
    let left = 0;
    let maxLen = 0;
    let map = new Map();

```

Same loop running for the length of `s`.
```javascript
for (let right = 0; right < s.length; right++)
```

Now instead of deleting duplicates we do this instead. If our map already has the `char` at the `right` pointer, `left` will be moved to whatever that characters index was + 1, skipping past it, but of our current `index` of `left` is greater than that `sum` we keep that one.
```javascript
let char = s[right];

  if (map.has(char)) {
    left = Math.max(left, map.get(char) + 1);
  };
```

final difference is setting the key value pairs as the character and its index, and same as before the `maxLen` is calculated each loop checking what the longest subtring is.
```javascript
  map.set(char, right);
  maxLen = Math.max(maxLen, right - left + 1);
```

## Full Solution
```javascript
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLen = 0;
    let map = new Map();

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (map.has(char)) {
            left = Math.max(left, map.get(char) + 1);
        }

        map.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

```