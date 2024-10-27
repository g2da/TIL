const pad = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  "*": [3, 0],
  0: [3, 1],
  "#": [3, 2],
};

function solution(numbers, hand) {
  let left = pad["*"];
  let right = pad["#"];

  return Array.from(numbers).reduce((acc, cur) => {
    const target = pad[cur.toString()];

    if ([1, 4, 7].includes(cur)) {
      left = target;
      return acc + "L";
    }

    if ([3, 6, 9].includes(cur)) {
      right = target;
      return acc + "R";
    }

    const leftDist =
      Math.abs(left[0] - target[0]) + Math.abs(left[1] - target[1]);
    const rightDist =
      Math.abs(right[0] - target[0]) + Math.abs(right[1] - target[1]);

    if (leftDist < rightDist) {
      left = target;
      return acc + "L";
    }
    if (leftDist > rightDist) {
      right = target;
      return acc + "R";
    }
    if (hand === "right") {
      right = target;
      return acc + "R";
    } else {
      left = target;
      return acc + "L";
    }
  }, "");
}
