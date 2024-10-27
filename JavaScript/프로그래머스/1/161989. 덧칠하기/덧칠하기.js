function solution(n, m, section) {
  let result = 0;
  let wall = Array.from({ length: n }, (_, i) => section.includes(i + 1));

  while (wall.some(Boolean)) {
    result++;
    const targetIdx = wall.indexOf(true);
    if (targetIdx !== -1) {
      wall.fill(false, targetIdx, targetIdx + m);
    }
  }
  return result;
}
