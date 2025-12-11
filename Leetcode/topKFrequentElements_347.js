// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
//
//   Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
//
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
//
// Example 3:
// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
// Output: [1,2]
//
// Return k amount of the most frequent elements.
// My first thought is to create a hash map of the int array nums, so that my key value pairs are [int, count]. Once we have a has map we then loop through it to find the k amount of high frequency int.

// so easier said than done lol. after creating the has map, we have to covert it back to array because maps don't have a built in sorting function. After converting it to an array and sorting it we can build our ans array. We need to extract our k amount of top entries with .slice, but we only want to ints of the ans array not the values of them. finally return ans.
// Time complexity, O(n log n), there's a O(n) that uses a heap but lmao wtf is a heap another days problem.
var topKFrequent = function(nums, k) {
  const map = new Map();

  for (let int of nums) {
    if (map.has(int)) {
      map.set(int, map.get(int) + 1)
    } else {
      map.set(int, 1)
    }
  }

  const arr = Array.from(map.entries());
  arr.sort((a, b) => b[1] - a[1]);

  const topK = arr.slice(0, k);
  const ans = topK.map(pair => pair[0]);

  return ans;
};