const direction = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };

function solution(park, routes) {
  let [x, y, w, h] = [0, 0, park[0].length, park.length];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (park[i][j] === "S") {
        x = i;
        y = j;
        break;
      }
    }
  }

  for (const r of routes) {
    const [dir, n] = r.split(" ");
    let [dx, dy] = [x, y];

    for (let i = 0; i < Number(n); i++) {
      const newX = x + direction[dir][0];
      const newY = y + direction[dir][1];

      if (
        newX >= 0 &&
        newX < h &&
        newY >= 0 &&
        newY < w &&
        park[newX][newY] !== "X"
      ) {
        x = newX;
        y = newY;
      } else {
        x = dx;
        y = dy;
        break;
      }
    }
  }

  return [x, y];
}
