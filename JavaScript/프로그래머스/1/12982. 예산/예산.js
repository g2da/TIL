function solution(d, budget) {
  d.sort((a, b) => a - b);
  let isAllSupported = d.reduce((acc, cur) => acc + cur, 0) <= budget;
  if (isAllSupported) return d.length;

  let answer = 0;
  let sum = 0;

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) break;
    answer++;
  }
  return answer;
}
