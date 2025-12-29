// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//   Given a string s, return true if it is a palindrome, or false otherwise.
//
//   Example 1:
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//   Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// My first thought is a two pointer solution, similar to leetcode 26 (remove duplicates). But this time we initialise i at the start of the string / array and j at the end, for every loop we compare two characters at a time, if they are equal we continue loop as long as they dont equal each other (while i > j).
// Before we get to that we have to clean the input and remove all non alphanumeric characters and all lowercase. Lowercase is easy just s.toLowerCase(). Removing everything else involves replacing all those characters with nothing, removing them. We do this by using .replace() along with regex filter /[^a-z0-9]/g, where ^ represents remove and we specify our range a-z & 0-9, /g means global. this filters our string down.
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};