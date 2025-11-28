# Big (O) - Time and Space Complexity

### Definition: 
Big O is a mathematical notation that describes the limiting behaviour if a function when the argument tends towards a particular value or infinity.

### Why:
**Big O** notation helps us understand how the performance of an algorithm change as the size of the input grows, providing a simple way to compare and analyse different algorithms’ efficiently.

**Time Complexity:** describes the amount of time necessary to execute an algorithm.
**Space Complexity:** describes the amount of memory or space utilised by an algorithm/program.

## Big O Linear Example:

Given a problem where we have a list of *N* numbers (unknown length). We do not know what numbers are in the list.
We are asked to use code to find and return “True” if the number 2 is in the list, if not return “false”.
Our solution could be to go through every position in the list and check if the number at that position is equal to 2.

```javascript
let list = [3, 10, 2, 7];
let found = False;

for (let i = 0; i < list.length; i ++) {
  if (i === 2) {
    found = True;
    break;
  } else {
    return False;
  }
}
```

To loop through the entire list of *N* numbers, and make sure that 2 is or is not in the list, it would take *N* time. We need to check every number in the list once. Making this solution O(*N*) - linear time. The longer the list (The bigger *N* is). the longer it would take.

## Big O Summary

### Time Complexity 
* **O(1) - Constant** Time taken remains constant regardless of input size. *e.g.* Accessing an element in an array by index.
* **O(log N) - Logarithmic** Time taken to increase logarithmically as the input size grows. Operations are typically halved at each step. Time increases linearly as *N* goes up exponentially. *e.g.* Binary search in a sorted array.
* **O(N) - Linear** TIme taken increases proportionally to the size of the input. if *N* doubles. time taken doubles. *e.g.* Finding an item in an unsorted list.
* **O(N log N) - linearithmic** Time taken increases in a linearithmic manner, often seen in divide and conquer algorithms. *e.g.* Merge sort or quicksort.
* **O(N^2) - Quadratic** Time taken increases quadratically as the input size grows. Each element needs to be compared to every other element (nested loops). *e.g.* Bubble sort or selection sort.
* **O(2^N) - Exponential** Time taken doubles with each addition to *N*, leading to rapidly growing executions times. *e.g.* Finding all subsets of a set.
* **O(N!) - Factorial** TIme taken increases factorially with each increases in the input size, leading to extremely slow execution times. *e.g.* Solving the travelling sales problem exhaustively.

# Problem Solving

 