//https://leetcode.com/problems/number-of-islands/
const testMatrix = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];
var numIslands = function (grid) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      let queue = [];
      if (grid[row][column] === "1") {
        queue.push([row, column]);
        grid[row][column] = 0;
        count++;
      }

      while (queue.length) {
        let currentPos = queue.shift();
        let row = currentPos[0];
        let column = currentPos[1];
        //grid[row][column] = 0;

        for (let i = 0; i < directions.length; i++) {
          let nextRow = row + directions[i][0];
          let nextColumn = column + directions[i][1];

          if (
            nextRow < 0 ||
            nextColumn < 0 ||
            nextRow >= grid.length ||
            nextColumn >= grid[0].length
          ) {
            continue;
          }

          if (grid[nextRow][nextColumn] === "1") {
            queue.push([nextRow, nextColumn]);
            grid[nextRow][nextColumn] = 0;
          }
        }
      }
    }
  }
  return count;
};

console.log(numberOfIslands(testMatrix));
