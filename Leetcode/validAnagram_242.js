// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
//
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// The first solution i think of is sorting both string so they can be directly compared. best use of this would be array operations, first convert each string to an array of its characters with .split(""), sort them into alphabetical order with .sort() and then join them back together to make a string and compare them both.
// This is O(log n),
// first solution:
var isAnagram = function(s, t) {
  let isAnagram = false;

  let sArr = s.split("").sort().join("");
  let tArr = t.split("").sort().join("");

  if (sArr === tArr) {
    isAnagram = true;
  }
  return isAnagram;
};
// here is O(n), or O(s + t) solution .
// create a hash map and loop through each character (char) is s, key is char and value is the frequency of the letters occurrence. so for example 1: a = 3, n = 1, g = 1, r = 1, m = 1.
// Then loop through t and compare each of the char instances to our map. If it's in there we subtract its count by 1. if they have differing character return false
// Finally loop through our map and check if if everything is not equal to 0, this means it's not an anagram. If it is equal to 0 then anagram is true.
var isAnagram = function(s, t) {
  const map = new Map();

  for (let char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (let char  of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1)
    } else {
      return false;
    }
  }

  for (let [key, value] of map) {
    if (value !== 0) {
      return false
    }
  }
  return true
};
