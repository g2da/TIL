function solution(k, tangerine) {
  const countMap = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const sortedCounts = Array.from(Object.values(countMap)).sort(
    (a, b) => b - a
  );

  let total = 0;
  let types = 0;

  for (let count of sortedCounts) {
    total += count;
    types++;
    if (total >= k) {
      break;
    }
  }

  return types;
}
