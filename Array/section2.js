//https://leetcode.com/problems/two-sum/

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

let nums = [2, 7, 11, 15];
let target = 9;

//Brute firce
const findIdx = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numsToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (nums[p2] === numsToFind) {
        console.log([p1, p2]);
        return [p1, p2];
      }
    }
  }
  return null;
};

//findIdx(nums, target);

// let nums = [2,7,11,15];
// let target = 18;
const findIdxOptimal = function (nums, target) {
  let hashMap = {};
  //10:0
  //8:1
  //4:2
  //2:3
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] >= 0) {
      return [hashMap[nums[i]], i];
    } else {
      const numsTofind = target - nums[i];
      hashMap[numsTofind] = i;
    }
  }
  return [];
};
findIdxOptimal(nums, target);
