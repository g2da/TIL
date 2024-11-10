function solution(n, a, b) {
  let round = 0;

  while (a !== b) {
    [a, b] = [Math.ceil(a / 2), Math.ceil(b / 2)];
    round++;
  }

  return round;
}
