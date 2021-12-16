const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
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

const dfs = (grid, row, col, count) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    count > grid[row][col]
  ) {
    return;
  }

  grid[row][col] = count;

  for (let i = 0; i < directions.length; i++) {
    let currentDir = directions[i];
    let nextRow = row + currentDir[0];
    let nextColumn = col + currentDir[1];
    dfs(grid, nextRow, nextColumn, count + 1);
  }
};

const wallsAndGates = (rooms) => {
  for (let row = 0; row < rooms.length; row++) {
    for (let column = 0; column < rooms[0].length; column++) {
        if (rooms[row][column] === GATE) dfs(rooms, row, column, 0)
    }
  }
};

wallsAndGates(testMatrix);

console.log(testMatrix);
