const testMatrix = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

const orangesRotting = function (matrix) {
  const queue = [];
  let freshOranges = 0;
  let totalTime = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === ROTTEN) {
        queue.push([row, column]);
      }
      if (matrix[row][column] === FRESH) {
        freshOranges++;
      }
    }
  }

  let currentLength = queue.length;
  while (queue.length > 0) {
    if (currentLength === 0) {
      totalTime++;
      currentLength = queue.length;
    }

    let currentPos = queue.shift();
    currentLength--;
    let currentRow = currentPos[0];
    let currentColumn = currentPos[1];

    for (let i = 0; i < directions.length; i++) {
      let currentDir = directions[i];
      let nextRow = currentRow + currentDir[0];
      let nextColumn = currentColumn + currentDir[1];

      if (
        nextRow < 0 ||
        nextColumn < 0 ||
        nextRow >= matrix.length ||
        nextColumn >= matrix[0].length
      ) {
        continue;
      }

      if (matrix[nextRow][nextColumn] === FRESH) {
        queue.push([nextRow, nextColumn]);
        matrix[nextRow][nextColumn] = ROTTEN;
        freshOranges--;
      }
    }
  }

  if (freshOranges !== 0) {
    return -1;
  } else {
    return totalTime;
  }
};

console.log(orangesRotting(testMatrix));
