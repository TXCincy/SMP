const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");

// Draw players on the field
function drawPlayers(positions) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
  ctx.fillStyle = "blue";
  positions.forEach((pos, i) => {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText(`P${i + 1}`, pos.x - 10, pos.y - 15); // Label players
  });
}

// Visualize the sequence of actions
function drawPlay() {
  const sequence = document.getElementById("actionSequence").value.split("→").map(a => a.trim());

  let currentPositions = actions["Tilted"].positions; // Start with "Tilted" positions

  sequence.forEach((actionName, index) => {
    setTimeout(() => {
      const action = actions[actionName];

      if (action) {
        if (action.positions) {
          currentPositions = action.positions;
        } else if (action.transform) {
          currentPositions = action.transform(currentPositions);
        }
        drawPlayers(currentPositions);
      } else {
        alert(`Action "${actionName}" not found!`);
      }
    }, index * 1000); // Animate each action with a delay
  });
}

const actions = {
  "Tilted": {
    description: "Tilted starting setup",
    positions: [
      { x: 100, y: 150 }, // Player 1
      { x: 200, y: 100 }, // Player 2
      { x: 200, y: 200 }, // Player 3
      { x: 300, y: 150 }, // Player 4
      { x: 400, y: 150 }, // Player 5
    ],
  },
  "Pleasant": {
    description: "Pleasant starting setup",
    positions: [
      { x: 150, y: 150 }, // Player 1
      { x: 250, y: 100 }, // Player 2
      { x: 250, y: 200 }, // Player 3
      { x: 350, y: 150 }, // Player 4
      { x: 450, y: 150 }, // Player 5
    ],
  },
  "Salty": {
    description: "Salty starting setup",
    positions: [
      { x: 200, y: 150 }, // Player 1
      { x: 300, y: 100 }, // Player 2
      { x: 300, y: 200 }, // Player 3
      { x: 400, y: 150 }, // Player 4
      { x: 500, y: 150 }, // Player 5
    ],
  },
  "Retail": {
    description: "Retail starting setup",
    positions: [
      { x: 250, y: 150 }, // Player 1
      { x: 350, y: 100 }, // Player 2
      { x: 350, y: 200 }, // Player 3
      { x: 450, y: 150 }, // Player 4
      { x: 550, y: 150 }, // Player 5
    ],
  },
  "Citadel": {
    description: "Citadel starting setup",
    positions: [
      { x: 300, y: 150 }, // Player 1
      { x: 400, y: 100 }, // Player 2
      { x: 400, y: 200 }, // Player 3
      { x: 500, y: 150 }, // Player 4
      { x: 600, y: 150 }, // Player 5
    ],
  },
  "Mini": {
    description: "Mirror action",
    transform: (positions) => positions.map(p => ({ x: 800 - p.x, y: p.y })),
  },
  "Scar": {
    description: "Scar action",
    transform: (positions) => positions.map(p => ({ x: p.x + 10, y: p.y + 10 })),
  },
  "Big": {
    description: "Big action",
    transform: (positions) => positions.map(p => ({ x: p.x - 10, y: p.y - 10 })),
  },
  "Gold": {
    description: "Give and go",
    transform: (positions) => {
      let updated = [...positions];
      updated[0].x += 50; // Player 1 moves
      updated[1].y += 50; // Player 2 cuts
      return updated;
    },
  },
  "Grey": {
    description: "Grey action",
    transform: (positions) => positions.map(p => ({ x: p.x + 20, y: p.y - 20 })),
  },
  "Purple": {
    description: "Purple action",
    transform: (positions) => positions.map(p => ({ x: p.x - 20, y: p.y + 20 })),
  },
  "Green": {
    description: "Green action",
    transform: (positions) => positions.map(p => ({ x: p.x + 30, y: p.y + 30 })),
  },
  "Tact": {
    description: "Tact action",
    transform: (positions) => positions.map(p => ({ x: p.x - 30, y: p.y - 30 })),
  },
  "Pump": {
    description: "Pump action",
    transform: (positions) => positions.map(p => ({ x: p.x + 40, y: p.y - 40 })),
  },
  "Chug": {
    description: "Chug action",
    transform: (positions) => positions.map(p => ({ x: p.x - 40, y: p.y + 40 })),
  },
  "Shield": {
    description: "Shield action",
    transform: (positions) => positions.map(p => ({ x: p.x + 50, y: p.y + 50 })),
  },
  "Small Fry": {
    description: "Small Fry action",
    transform: (positions) => positions.map(p => ({ x: p.x - 50, y: p.y - 50 })),
  },
  "Flopper": {
    description: "Flopper action",
    transform: (positions) => positions.map(p => ({ x: p.x + 60, y: p.y - 60 })),
  },
  "Midas": {
    description: "Midas action",
    transform: (positions) => positions.map(p => ({ x: p.x - 60, y: p.y + 60 })),
  },
  "Edit": {
    description: "Edit action",
    transform: (positions) => positions.map(p => ({ x: p.x + 70, y: p.y + 70 })),
  },
  "Boxup": {
    description: "Boxup action",
    transform: (positions) => positions.map(p => ({ x: p.x - 70, y: p.y - 70 })),
  },
  "Reboot": {
    description: "Reboot action",
    transform: (positions) => positions.map(p => ({ x: p.x + 80, y: p.y - 80 })),
  },
  "Storm": {
    description: "Storm action",
    transform: (positions) => positions.map(p => ({ x: p.x - 80, y: p.y + 80 })),
  },
  "X Switch": {
    description: "X Switch action",
    transform: (positions) => positions.map(p => ({ x: p.x + 90, y: p.y + 90 })),
  },
  "Iso": {
    description: "Iso action",
    transform: (positions) => positions.map(p => ({ x: p.x - 90, y: p.y - 90 })),
  },
};

// Initial field drawing
drawPlayers(actions["Tilted"].positions);