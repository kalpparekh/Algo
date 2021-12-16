let first = [
  { name: "a", someThing: "some" },
  { name: "b", someThing: "some1" },
];
let second = [
  { name: "c", someThing: "some3" },
  { name: "a", someThing: "some4" },
];

// var result = result1.filter(function (o1) {
//   return result2.some(function (o2) {
//     return o1.id === o2.id; // return the ones with equal id
//   });
// });

const hashMap = {};
for (let i = 0; i < first.length; i++) {
  hashMap[first[i].name] = true;
}
console.log(hashMap);
const res3 = second.filter(function (page) {
  return !hashMap[page.name];
});
console.log(res3);

//console.log(result);

let first = [
  { name: "a", someThing: "some" },
  { name: "b", someThing: "some1" },
];
let second = [
  { name: "c", someThing: "some3" },
  { name: "a", someThing: "some4" },
];

let hashMapA = {};
let hashMapB = {};

for (let i = 0; i < first.length; i++) {
  hashMapA[first[i].name] = true;
}

for (let i = 0; i < second.length; i++) {
  hashMapB[second[i].name] = true;
}

let myOutPuta = first.filter(function (input) {
  return !hashMapB[input.name];
});

let myOutPutb = second.filter(function (input) {
  return !hashMapA[input.name];
});
