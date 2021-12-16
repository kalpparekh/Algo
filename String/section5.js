//https://leetcode.com/problems/backspace-string-compare/

/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.
Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a##c", t = "#a#c"
Output: true
Explanation: Both s and t become "c".
Example 4:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

var backspaceCompare = function (s, t) {
  let sArray = [];
  let tARray = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sArray.pop();
    } else {
      sArray.push(s[i]);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      tARray.pop();
    } else {
      tARray.push(t[i]);
    }
  }

  if (sArray.length !== tARray) {
    return false;
  }

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== tARray[i]) {
      return false;
    }
  }

  return true;
};

let s = "aaa###a",
  t = "aaaa###a";
backspaceCompare(s, t);

var backspaceCompareOptimal = function (s, t) {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#" || t[p2] === "#") {
      if (s[p1] === "#") {
        counter = 2;
        while (counter > 0) {
          p1--;
          counter--;
          if (s[p1] === "#") {
            counter = counter + 2;
          }
        }
      }
      if (t[p2] === "#") {
        counter = 2;
        while (counter > 0) {
          p2--;
          counter--;
          if (t[p2] === "#") {
            counter = counter + 2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};
backspaceCompareOptimal(s, t);
