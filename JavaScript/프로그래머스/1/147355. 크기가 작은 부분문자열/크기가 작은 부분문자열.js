function solution(t, p) {
  let answer = Array.from(t, (_, i) => t.slice(i, i + p.length))
    .filter((x) => x.length === p.length)
    .reduce((acc, cur) => (Number(cur) <= Number(p) ? acc + 1 : acc), 0);

  return answer;
}
