//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/* 
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
*/
var lengthOfLongestSubstring = function (s) {
  let totalLength = 0;
  for (let i = 0; i < s.length; i++) {
    let seenChar = {};
    let counter = 0;
    for (let j = i; j < s.length; j++) {
      let currentChar = s[j];
      if (seenChar[currentChar]) {
        break;
      } else {
        seenChar[currentChar] = true;
        counter++;
      }
    }
    totalLength = Math.max(counter, totalLength);
  }
  return totalLength;
};
let s = "abcabcbb";

lengthOfLongestSubstring(s);

var lengthOfLongestSubstringOptimal = function (s) {
  let left = 0;
  let longest = 0;
  let seenChar = {};

  for (let right = 0; right < s.length; right++) {
    let current = s[right];
    if (seenChar[current] >= left) {
      left = seenChar[current] + 1;
    }
    seenChar[current] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};
lengthOfLongestSubstringOptimal(s);
