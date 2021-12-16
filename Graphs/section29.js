const p = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
];

//loop over preReq make adjList
//loop over all n
//loop over adjList[n]
//push first val in queue
//shift
//check current ===v
//loop over its connections and push it to queue

const canFinish = function (n, prerequisites) {
  const adjList = new Array(n).fill(0).map(() => []);
  //loop over preReq make adjList
  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }

  //loop over all n
  for (let v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    //loop over adjList[v]
    for (let i = 0; i < adjList[v].length; i++) {
      //push first val in queue
      queue.push(adjList[v][i]);
    }

    while (queue.length) {
      //shift
      const current = queue.shift();
      seen[current] = true;

      //check current ===v
      if (current === v) return false;
      //loop over its connections and push it to queue
      const adjacent = adjList[current];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
};

canFinish(6, p);
