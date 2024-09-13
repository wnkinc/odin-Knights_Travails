function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function isValid([x, y]) {
    return x >= 0 && y >= 0 && x < 8 && y < 8;
  }

  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const currentSquare = path[path.length - 1];

    if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) {
      return path; // We've reached the destination
    }

    for (let [dx, dy] of directions) {
      const nextSquare = [currentSquare[0] + dx, currentSquare[1] + dy];
      if (isValid(nextSquare) && !visited.has(nextSquare.toString())) {
        visited.add(nextSquare.toString());
        queue.push([...path, nextSquare]);
      }
    }
  }

  return null; // No valid path found (though on an 8x8 board, this shouldn't happen)
}

console.log(knightMoves([0, 0], [1, 2])); // Example: [[0,0],[1,2]]
