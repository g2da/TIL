function solution(s) {
  let x = s[0];
  let xCount = 0;
  let count = 0;

  const answer = Array.from(s).reduce((acc, cur, idx) => {
    if (cur === x) {
      xCount += 1;
    } else {
      count += 1;
    }

    if (xCount === count) {
      acc += 1;
      x = s[idx + 1];
      xCount = 0;
      count = 0;
    }

    return acc;
  }, 0);

  return xCount !== 0 || count !== 0 ? answer + 1 : answer;
}
