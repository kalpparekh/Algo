//https://leetcode.com/problems/container-with-most-water/

/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2

*/

// let height = [1,8,6,2,5,4,8,3,7];
// Output: 49

var maxArea = function (height) {
  let maxArea = 0;
  for (let p1 = 0; p1 < height.length; p1++) {
    for (let p2 = p1 + 1; p2 < height.length; p2++) {
      //l*w
      const length = Math.min(height[p1], height[p2]);
      const width = p2 - p1;
      const area = length * width;
      maxArea = Math.max(area, maxArea);
    }
  }
  return maxArea;
};

var maxAreaOptimal = function (height) {
  let p1 = 0;
  let p2 = height.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    let l = Math.min(height[p1], height[p2]);
    let w = p2 - p1;
    let area = l * w;
    maxArea = Math.max(area, maxArea);
    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};
