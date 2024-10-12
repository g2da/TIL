function solution(s) {
  const target = s.length;
  let answer =
    target % 2 === 0
      ? s.slice(target / 2 - 1, target / 2 + 1)
      : s[Math.floor(target / 2)];
  return answer;
}
