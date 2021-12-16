//https://leetcode.com/problems/valid-palindrome/
/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

//two pointer
var isPalindromeOuter = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
};

//reverce
const isValidPalindromeReverce = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let rev = "";

  // generate a reverse string using a reverse for loop.
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev === s;
};

//two pointer from center
const isValidPalindromeFromCenter = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = Math.floor(s.length / 2),
    right = left;
  if (s.length % 2 === 0) {
    left--;
  }
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      return false;
    }

    left--;
    right++;
  }

  return true;
};

//https://leetcode.com/problems/valid-palindrome-ii/submissions/
/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
Example 1:
Input: s = "aba"
Output: true
 */
const almostPalindrom = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return (
        checkIfPalindromOnSubstring(s, p1 + 1, p2) ||
        checkIfPalindromOnSubstring(s, p1, p2 - 1)
      );
    }
    p1++;
    p2--;
  }
  return true;
};

const checkIfPalindromOnSubstring = function (s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
almostPalindrom("aba");
