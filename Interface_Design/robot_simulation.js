// Overview¶
// Write a robot simulator, where robots can be placed on an infinite 2D grid, with cardinal directions of North, South, East and West.
// Robots will always be facing in one of the cardinal directions and also have coordinates on the grid (e.g. {x: 3, y: 8})
// Movement in any direction on the grid is a change of 1 unit
// Robots can perform a variety of actions which update their coordinates and orientation on the board as described below

// // Robot properties
// bearing - direction the robot is facing
// coordinates - x,y position on the grid

// // Robot methods
// orient('north') - sets the robot's bearing by the passed cardinal direction
// turnRight() - updates the robot's bearing
// turnLeft()  - updates the robot's bearing
// at(1,2) - sets the robots coordinates by the arguments (i.e. x = 1, y = 2)
// advance(1) - updates the robot's coordinates (based on its current bearing) by the argument (i.e. advance by 1)
// instructions('ALA') - converts an encoded instructions string to a list of methods
// place({x: 2, y: -7, direction: 'east'}) - sets both the robot's coordinates and bearing
// evaluate('ALA') - will execute the passed instructions on the robot

// // Expectations
// expect(robot.instructions('RAAL')).toEqual(['turnRight', 'advance', 'advance', 'turnLeft']);
// robot.place({x: 2, y: -7, direction: 'east'});
// robot.evaluate('RRAAAAALA');
// expect(robot.coordinates).toEqual([-3, -8]);
// expect(robot.bearing).toEqual('south');
// Implement a Robot simulator which can satisfy all of the expectations listed above

const robotSimulator = function () {
  this.directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  this.cardinals = ["north", "east", "south", "west"];

  this.bearing = "";
  this.coordinates = [0, 0];
};

robotSimulator.prototype.orient = function (cardinal) {
  this.bearing = cardinal;
};

//   n
//s      e
//   w
robotSimulator.prototype.turnRight = function () {
  if (this.bearing === "north") {
    this.bearing = "east";
  } else if (this.bearing === "east") {
    this.bearing = "south";
  } else if (this.bearing === "south") {
    this.bearing = "west";
  } else if (this.bearing === "west") {
    this.bearing = "north";
  }
};

//   n
//s      e
//   w
robotSimulator.prototype.turnLeft = function () {
  if (this.bearing === "north") {
    this.bearing = "south";
  } else if (this.bearing === "south") {
    this.bearing = "west";
  } else if (this.bearing === "west") {
    this.bearing = "east";
  } else if (this.bearing === "east") {
    this.bearing = "north";
  }
};

robotSimulator.prototype.at = function (x, y) {
  this.coordinates = [x, y];
};

//   n
//s      e
//   w
robotSimulator.prototype.advance = function (x, y) {
  if (this.bearing === "north") {
    this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]];
  }
  if (this.bearing === "east") {
    this.coordinates = [this.coordinates, this.coordinates[1] + 1];
  }
  if (this.bearing === "west") {
    this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]];
  }
  if (this.bearing === "south") {
    this.coordinates = [this.coordinates, this.coordinates[1] - 1];
  }
};

robotSimulator.prototype.instructions = function (instruction) {
  let instructionArray = [];
  for (let i = 0; i < instruction.length; i++) {
    let currentInstruction = instruction[i];
    if (currentInstruction === "R") {
      instructionArray.push("turnRight");
    } else if (currentInstruction === "A") {
      instructionArray.push("advance");
    } else if (currentInstruction === "L") {
      instructionArray.push("turnLeft");
    }
  }
  return instructionArray;
};

//({x: 2, y: -7, direction: 'east'})
robotSimulator.prototype.place = function (input) {
  this.coordinates[0] = x;
  this.coordinates[1] = y;
  this.bearing = input.directions;
};

//evaluate('ALA')
robotSimulator.prototype.evaluate = function (input) {
  const evaluatedInstructionArray = this.instructions(input);
  for (let i = 0; i < evaluatedInstructionArray.length; i++) {
    let instruction = evaluatedInstructionArray[i];
    this[instruction]();
  }
};

const simulator = new robotSimulator();
simulator.orient("north");
simulator.at(3, 3);
simulator.advance();
simulator.evaluate("ALA");
