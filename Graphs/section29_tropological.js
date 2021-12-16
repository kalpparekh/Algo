const p = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
];

const canFinish = function (n, prerequisites) {
  let inDegree = new Array(n).fill(0);
  let adjList = inDegree.map(() => []);

  for (let i = 0; i < prerequisites.length; i++) {
    let pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0]);
  }

  let stack = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }
  let count = 0;
  while (stack.length) {
    let current = stack.pop();
    count++;

    for (let i = 0; i < adjList[current].length; i++) {
      const next = adjList[current][i];
      inDegree[next]--;
      if (inDegree[next] === 0) {
        stack.push(inDegree[next]);
      }
    }
  }

  return count === n;
};

