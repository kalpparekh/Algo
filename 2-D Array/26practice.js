const INF = 2147483647;

const testMatrix = [
  [INF, -1,  0, 1],
  [2, 2, 1, 0],
  [1, -1,  2, -1],
  [0, -1,    INF, INF],
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

var wallsAndGates = function (rooms) {
  let queue = [];
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) {
        queue.push([row, col]);
      }
    }
  }
  while (queue.length > 0) {
    let currntPos = queue.shift();
    let currentRow = currntPos[0];
    let currentCol = currntPos[1];

    for (let i = 0; i < directions.length; i++) {
      let currentDir = directions[i];
      let nextRow = currentRow + currentDir[0];
      let nextColumn = currentCol + currentDir[1];

      if (
        nextRow < 0 ||
        nextColumn < 0 ||
        nextRow >= rooms.length ||
        nextColumn >= rooms[0].length ||
        rooms[nextRow][nextColumn] !== EMPTY
      ) {
        continue;
      }
      rooms[nextRow][nextColumn] = rooms[currentRow][currentCol] + 1;
      queue.push([nextRow, nextColumn]);
    }
  }
};

wallsAndGates(testMatrix);
// const testMatrix = [
//     [INF,  -1,   0,   1],
//     [INF,  INF,  1,  0],
//     [1,  -1,  INF,  -1],
//     [0,    -1,  INF,  INF],
//   ];
  