//https://leetcode.com/problems/trapping-rain-water/
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

*/

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var trap = function (height) {
  let maxWater = 0;

  for (let i = 0; i < height.length; i++) {
    let leftPointer = i;
    let maxL = 0;
    let rightPointer = i;
    let maxR = 0;

    while (leftPointer >= 0) {
      maxL = Math.max(maxL, height[leftPointer]);
      leftPointer--;
    }
    while (rightPointer < height.length) {
      maxR = Math.max(maxR, height[rightPointer]);
      rightPointer++;
    }

    let total = Math.min(maxL, maxR) - height[i];

    if (total > 0) {
      maxWater = maxWater + total;
    }
  }

  return maxWater;
};

trap(height);

//const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var trapInOptimal = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maxL = 0;
  let maxR = 0;
  let totalWater = 0;
  while (leftPointer < rightPointer) {
    if (height[leftPointer] <= height[rightPointer]) {
      if (maxL > height[leftPointer]) {
        let water = maxL - height[leftPointer];
        if (water > 0) {
          totalWater = totalWater + water;
        }
      } else {
        maxL = height[leftPointer];
      }
      leftPointer++;
    } else {
      if (maxR > height[rightPointer]) {
        let water = maxR - height[rightPointer];
        if (water > 0) {
          totalWater = totalWater + water;
        }
      } else {
        maxR = height[rightPointer];
      }
      rightPointer--;
    }
  }
  return totalWater;
};
