function solution(n, left, right) {
  return Array.from({ length: right - left + 1 }, (_, i) => {
    const index = i + left;
    const row = Math.floor(index / n);
    const col = index % n;
    return Math.max(row, col) + 1;
  });
}
