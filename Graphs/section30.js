//https://leetcode.com/problems/network-delay-time/

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const distances = new Array(n).fill(Infinity);
  const adjList = distances.map(() => []);
  distances[k - 1] = 0;
  for (let i = 0; i < times.length; i++) {
    let current = times[i];
    adjList[current[0] - 1].push([current[1] - 1, current[2]]);
  }
  console.log(adjList);

  let queue = [];
  queue.push(k - 1);

  while (queue.length) {
    queue = queue.sort();
    let currentVertex = queue.shift();

    const adjacent = adjList[currentVertex];
    //[2, 9]
    //[4, 2]
    let someArray = [];
    for (let i = 0; i < adjacent.length; i++) {
      const neighboringVertex = adjacent[i][0];
      const weight = adjacent[i][1];
      if (distances[currentVertex] + weight < distances[neighboringVertex]) {
        distances[neighboringVertex] = distances[currentVertex] + weight;
        queue.push(neighboringVertex);
      }
    }
  }
  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

const t = [
  [1, 2, 9],
  [1, 4, 2],
  [2, 5, 1],
  [4, 2, 4],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];
console.log(networkDelayTime(t, 5, 1));
