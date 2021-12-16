const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

const traversalBFS = function (graph) {
  const queue = [0];
  let seen = {};
  let resultArray = [];

  while (queue.length) {
    let vertex = queue.shift();
    resultArray.push(vertex);
    seen[vertex] = true;

    let connections = graph[vertex];

    for (let i = 0; i < connections.length; i++) {
      let connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }
  return resultArray;
};

console.log(traversalBFS(adjacencyList));
