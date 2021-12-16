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

const traversalDFS = function (graph, vertex, values, seen) {
  values.push(vertex);
  seen[vertex] = true;

  let connections = graph[vertex];

  for (let i = 0; i < connections.length; i++) {
    let connection = connections[i];
    if (!seen[connection]) {
      traversalDFS(adjacencyList, connection, values, seen);
    }
  }
  return values;
};

const values = [];
traversalDFS(adjacencyList, 0, values, {});
console.log(values);
