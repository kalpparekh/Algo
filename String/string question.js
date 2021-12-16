/*Challenge # 3 — Reversing letters and words
Reversing letters means you write certain letters (or numbers) backward or upside down. This is sometimes referred to as mirror writing.
Input: "I evol uoy os !hcum"
Output: I love you so much!*/

const reverse = function (string) {
  return string
    .split(" ")
    .map(function (item) {
      return item.split("").reverse().join("");
    })
    .join(" ");
};

//permutation
let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return string;
  }

  let permutationsArray = [];
  //abc
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);
    console.log(remainingChars);
    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
};

findPermutations("abc");

/*
Challenge # 6— Sorting an array of strings by length
We are given an array of strings, we need to sort the array in increasing order of string lengths
Input : ["You", "are", "beautiful", "looking"]
Output : [“You", "are", "looking", "beautiful"]
*/
const sort = function (arr) {

};

sort(["You", "are", "beautiful", "looking"]);


/**
 * Anagram
 */

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
