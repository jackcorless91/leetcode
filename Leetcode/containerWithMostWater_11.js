// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//   Find two lines that together with the x-axis form a container, such that the container contains the most water.
//   Return the maximum amount of water a container can store.
//   Notice that you may not slant the container.
//
//
//   Example 1:
//
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
//
// Example 2:
//
// Input: height = [1,1]
// Output: 1
//
// This is asking us to find the absolute maximum area of given array of heights, where the x axis is represented by the index of each element.
// First we need to understand how to calculate height, width and area. This is going to be a two pointer solution. left and right pointer init at start and end. This is going to influence our area calculation. width is going to equal right - left, the difference between the two indices we're checking. height is going to equal which of right or left pointer is the smaller value, the water can only rise as high as the smaller wall (to calc max area). area is going to equal the difference between our two indices multiplied by whichever is the smaller value of either the left or right pointer.
// before starting the loop init i at 0 and j at the end of the array and max area at 0 as this will be re-evaluated every loop.
// we'll run this loop while i < j ensuring we check every point. Each loop we calculate area and max area which is init at 0 but for every loop will be compared with the new area calculation and whichever is larger will be saved to max area.
// When do we move the pointers ? whichever is smallest out of two points gets moved.
// Time 0(n)

var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;

  while (i < j) {
    area = (j - i) * Math.min(height[i], height[j]);
    maxArea = Math.max(maxArea, area)


    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};