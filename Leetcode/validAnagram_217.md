# LeetCode 217

## Question
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

### Examples

#### Example 1
`Input: s = "anagram", t = "nagaram" ` 

`Output: true`

#### Example 2
`Input: s = "rat", t = "car"`   

`Output: false`

## O(n) Solution
We are asked to compare two strings and return a boolean value based on their similarites on characters, they need the same length and the same character count. We need a way of keeping a count of the characters we've seen in the first string and compare that to the second string, if they're equal return `true` else `false`. This can be done with a `map` or object, but this will be with a map. `Key` will be the character and `value` will be its count. We loop through `s` and count characters, then loop through `t` and decrease the count, if the strings are the same it's an anagram.

First init a `map` as well as making an itial check for length, if the strings lengths aren't equal we can return `false` right away.
```javascript
if (s.length !== t.length) return false;
let map = new Map;
```

Now iterate through `s` and check if we've seen that character before, if we have add `1` to its previous count, otherwise add it to the map with its initial count at `1`.
```javascript
for (let char of s) {
  if (map.has(char)) {
    map.set(char, map.set(char) + 1) 
  } else {
    map.set(char, 1)
  } 
}
```

Next loop through `t` but instead of adding to the count if we see an existing `char` we're going to decrement the count with the goal of ending at `0` for a valid anagram. A condition can also be set if a new `char` is found we can return `false`, new `char` means it cannot be an anagram.
```javascript
for (let char of t) {
  if (map.has(char)) {
    map.set(char, map.get(char) + 1)
  } else {
    return false;
  }
}
```

Finally loop through `map` and check if all values are equal to `0`, if they are we've got an anagram otherwise return `false`.
```javascript
for (let [key, value] of map) {
  if (value !== 0) {
    return false;
  } else {
  }
}
return true;
```

## Full Solution
```javascript
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = new Map;
    
    for (let char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    };

    for (let char of t) {
        if (map.has(char)) {
            map.set(char, map.get(char) - 1)
        } else {
            return false;
        }
    }

    for (let [key, value] of map) {
        if (value !== 0) {
            return false;
        } else {
        }
    }
    return true;
};
```





