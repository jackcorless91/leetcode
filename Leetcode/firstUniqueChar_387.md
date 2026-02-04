# LeetCode 387

## Question
Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.

### Examples

#### Example 1
`Input: s = "leetcode"`   
`Output: 0`

#### Explanation
The character `'l'` at index 0 is the first character that does not occur at any other index.

#### Example 2
`Input: s = "loveleetcode"`   
`Output: 2`

#### Explanation


## Solution O(n)
Given an input string return the index of first character that only appears once, if that's none return `-1`. We need a way to track the count of characters and their frequency and then check which instance is the first non repeating. This can be done with a `map`. After looping through the input string and allocating a count to each character we need to loop through the string once again and find the first non repeating character.

First initialise an empty `map`.
```javascript
let map = new Map;
```

Now loop through `s` and start a running count for each `char` in `s`. If that `char` is already in the `map` add `1` to its count.
```javascript
for (let char of s) {
  if (map.has(char)) {
    map.set(char, map.get(char) + 1)
  } else {
    map.set(char, 1)
  }
}
```

finally loop through `s` and look for the first instance of a character being equal to `1`, when found return its index. If none return `-1`. We loop through the input string rather than the map because we need to know the index.
```javascript
for (let i = 0; i < s.length; i++) {
  if (map.get(s[i]) === 1) {
    return i;
  }
}

return -1;
```

### Full solution
```javascript
var firstUniqChar = function(s) {
    let map = new Map;

    for (let char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};
```












