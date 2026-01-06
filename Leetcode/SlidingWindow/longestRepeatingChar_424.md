# LeetCode 424

## Question:
You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

### Example 1:
Input: `s = "ABAB"`, `k = 2`  
Output: `4`  
#### Explanation: 
Replace the two 'A's with two 'B's or vice versa.

### Example 2:
Input: `s = "AABABBA"`, `k = 1`   
Output: `4`   
#### Explanation: 
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is `4`.
There may exists other ways to achieve this answer too.

## Solution 0(n) - Sliding Window
we are asked to return the longest substring of `s` while being allowed to flip up to `k` characters. This will be a sliding window solution, with the `right` pointer always expanding searching the whole window and the `left` pointer shrinking when a condition is met to keep the windows validity. The main premise of this solution is to keep track of the character count with a frequency map storing a count of each letter, we use the character that already appears the most and check if the amount of characters we need to flip is less than or equal to `k`, if it is we can save the length and return it, if not move to the next most frequent character and check the same. `Replacements needed = window size - maxfreq`.


First we initialise our variables. We're using an object to keep track of the character count isntead of a `map` becuase objects use `strings` as keys by default anyway, allowing less boilerplate and we don't need more complex operations like `.delete` or `.has`.
```javascript
    let left = 0;
    let freq = {};
    let maxFreq = 0;
    let maxLen = 0;
```

Next we start the loop of the `right` pointer.
```javascript
for (let right = 0; right < s.length; right++) 
```

Now we start keeping track of character count. `char` is each letter that the `right` pointer sees. To increment this count when we see more we use `freq[char]` which access that specific character on the `right` pointer and let it equal its current count `+ 1`, or if it has not current count it will be `0 + 1`.  
We also recalculate the `maxFreq` character we `Math.max`.
```javascript
  const char = s[right];
  freq[char] = (freq[char] || 0) + 1;
  maxFreq = Math.max(maxFreq, freq[char]);
```

Next we set the condition to increment the `left` pointer. this is saying while the window size minus the highest frequency character is less than `k`, minus 1 from the frequncy count and increment `left`.
```javascript
while ((right - left + 1) - maxFreq > k) { 
  freq[s[left]]--;
  left++;
}
```

Finally recalculate the max length.
```javascript
maxLen = Math.max(maxLen, right - left + 1);
```


## Full solution:
```javascript
var characterReplacement = function(s, k) {
    let left = 0;
    let freq = {};
    let maxFreq = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        freq[char] = (freq[char] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[char]);

        while ((right - left + 1) - maxFreq > k) {
            freq[s[left]]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};
```


