# LeetCode 125

## Question
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.   
Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

### Examples

#### Example 1
Input: `s` = "A man, a plan, a canal: Panama"   
Output: `true`

#### Explanation
"amanaplanacanalpanama" is a palindrome.

#### Example 2
Input: `s` = "race a car"
Output: `false`

#### Explanation
Explanation: "raceacar" is not a palindrome.

## Solution O(n)
We are asked to return a boolean value based on if the input string is a palindrome, or is the same in reverse. We need a way to compare values one by one while also skipping non characters like spaces and punctuation, this can be done with a two pointer solution, left and right. After initialising each pointer at the start and end move each pointer only if it's a letter, then covert all characters to lowercase and compare the `s[left]` to s`[right]`, if everything is equal it's a palindrome, if not return `false`.

First initialise `left` and `right` pointers at `0` and `s.length - 1`. We'll be comparing the start of the string to the end of the string.
```javascript
let left = 0;
let right = s.length - 1;
```

Next start the main while loop that will run on the condition that the right pointer is greater than the left.
```javascript
while (left < right) {
// logic
}
```

Inside the main loop we'll run our checks to skip spaces and commas etc.
For each loop we check the `left` pointer, is it a character ? if it's not (like a comma) increment the `left` pointer, do the same with the `right`. Now we have two characters to compare, convert them to lowercase, if they're not equal the loop breaks and we return `false`. If they are equal icrement and decrement and check the next value.
```javascript
 while (left < right && !/[a-z0-9]/i.test(s[left])) {
  left++;
}

while (left < right && !/[a-z0-9]/i.test(s[right])) {
  right--;
}

if (s[left].toLowerCase() !== s[right].toLowerCase()) {
  return false;
}
left++;
right--;
```

Finally if all characters are equal return `true.
```javascript
return true;
```

### Full Solution 
```javascript
var isPalindrome = function(s) {
     let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (left < right && !/[a-z0-9]/i.test(s[left])) {
            left++;
        }

        while (left < right && !/[a-z0-9]/i.test(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};
```
