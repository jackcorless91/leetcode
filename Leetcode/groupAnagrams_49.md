# LeetCode 49

## Question
Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

### Examples

#### Example 1
`Input: strs = ["eat","tea","tan","ate","nat","bat"]`  
`Output: [["bat"],["nat","tan"],["ate","eat","tea"]]`

#### Explanation
There is no string in `strs` that can be rearranged to form `"bat"`.
The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.
The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.

## Solution O(nLogn)
We need to return the input array of strings as groups of anagrams. We need a way of keeping track of words sharing the same characters, this can be done with `map`. Sort each word in alphabetical order, if that arrangement of characters e.g. `a, e, t` are present in the array, save the word as the value, if the arrangement of characters isn't in the array save it as the key and the word as the value.

First initalise an empty map to store our sorted characters and words.
```javascript
const map = new Map;
```

Next start the main through `strs`, as a `for of` loop. First thing to be done in the loop is to sort the characters of the word. strings don't have their own `sort()` operator like arrays, so we need to use `split().sort().join()`. This splits the letters up into an array, then we sort that array and join to characters back together as a string.
```javascript
for (let words of strs) {
  let sorted = words.split("").sort("").join("");
}
```

Now we need to start using the `map`. If the sorted word isn't already a `key` in the array, make it one and create an empty array as its value, if the sorted word IS in the array then push the unsorted word to the value array.
```javascript
if (!map.has(sorted)) {
  map.set(sorted, []);
}

map.get(sorted).push(words);
```

Finally return the values in the `map`.
```javascript
return [...map.values()];
```

### Full Solution
var groupAnagrams = function(strs) {
const map = new Map;

    for (let words of strs) {

        const sorted = words.split("").sort().join("");

        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        map.get(sorted).push(words);
    }
    
    return [...map.values()];
};