function solution(land) {
  const answer = land.reduce((acc, cur) => {
    [a, b, c, d] = cur;
    a += Math.max(acc[1], acc[2], acc[3]);
    b += Math.max(acc[0], acc[2], acc[3]);
    c += Math.max(acc[1], acc[0], acc[3]);
    d += Math.max(acc[1], acc[2], acc[0]);

    return [a, b, c, d];
  });

  return Math.max(...answer);
}
