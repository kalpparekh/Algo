const binarySearch = function (array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundValue = array[mid];
    if (foundValue === target) {
      return mid;
    } else if (foundValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

//Time: O(N Log N)
//Space: O(N)
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(Infinity);

  function binarySearch(target) {
    let left = 0;
    let right = dp.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (dp[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  for (let i = 0; i < nums.length; i++) {
    console.log(dp);
    const idx = binarySearch(nums[i]);
    dp[idx] = nums[i];
   
  }
  const res = dp.indexOf(Infinity);

  if (res === -1) {
    return nums.length;
  } else {
    return res;
  }
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
