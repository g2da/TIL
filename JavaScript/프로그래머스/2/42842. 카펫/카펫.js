function solution(brown, yellow) {
  const total = brown + yellow;

  const arr = Array.from(
    { length: Math.floor(Math.sqrt(total)) },
    (_, i) => i + 1
  ).reduce((acc, height) => {
    if (total % height === 0) {
      const width = total / height;
      acc.push([width, height]);
    }
    return acc;
  }, []);

  for (let [width, height] of arr) {
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}
