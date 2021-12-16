var numOfMinutes = function (n, headID, managers, informTime) {
  let adjList = new Array(n).fill(0).map(() => []);
  //const adjList = managers.map(() => []);
  for (let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    if (manager === -1) continue;

    adjList[manager].push(employee);
  }

  let total = 0;
  let queue = [{ manager: headID, time: 0 }];
  while (queue.length > 0) {
    let current = queue.shift();
    let manager = current.manager;
    let time = current.time;
    let subordinates = adjList[manager];
    let connections = adjList[manager];

    for (let i = 0; i < connections.length; i++) {
      let connection = connections[i];
      queue.push({
        manager: connection,
        time: time + informTime[manager],
      });
    }
    total = Math.max(total, time);
  }
  return total;
};
// 0, 1, 2, 3, 4,  5, 6, 7
const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

//console.log(numOfMinutes(8, 4, managersArray, informTimeArray));

var numOfMinutesKalp = function (n, headID, managers, informTime) {
  let adjList = new Array(n).fill(0).map(() => []);

  for (let empoyee = 0; empoyee < n.length; employee++) {
    let manager = employee[i];

    if (manager === -1) {
      continue;
    }

    adjList[manager].push(empoyee);
  }

  let total = 0;
  let queue = [{ namager: headID, time: 0 }];

  while (queue.length) {
    let current = queue.shift();
    let currentManager = current.manager;
    let currentTime = current.time;

    let connections = adjList[currentManager];

    for (let i = 0; i < connections.length; i++) {
      let connection = connections[i];

      let processTime = currentTime + informTime[currentManager];

      queue.push({
        manager: connection,
        time: processTime,
      });
    }

    total = Math.max(total, currentTime);
  }
};

numOfMinutesKalp(8, 4, managersArray, informTimeArray);
