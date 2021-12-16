const t = [
  [1, 4, 2],
  [1, 2, 9],
  [4, 2, -4],
  [2, 5, -3],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];

//Create distance array with n values and fill it with "INFINITY"
//set initial input k to 0
//this algo always runs n-1 time in any case
//Check distances[currentVertex] + weight < distances[neighboringVertex] (We wanted to replace it only in case we find smaller val)
//If true then distances[neighboringVertex] = distances[currentVertex] + weight;

var networkDelayTime = function (times, N, k) {
  //Create distance array with n values and fill it with "INFINITY"
  const distances = new Array(N).fill(Infinity);
  //set initial input k to 0
  distances[k - 1] = 0;
  //this algo always runs n-1 time in any case
  for (let i = 0; i < N - 1; i++) {
    let count = 0;
    //Loop obver time
    for (let j = 0; j < times.length; j++) {
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];
      //Check distances[currentVertex] + weight < distances[neighboringVertex] (We wanted to replace it only in case we find smaller val)
      if (distances[source - 1] + weight < distances[target - 1]) {
        //If true then distances[neighboringVertex] = distances[currentVertex] + weight;
        distances[target - 1] = distances[source - 1] + weight;
        count++;
      }
    }

    if (count === 0) break;
  }

  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTime(t, 5, 1));
