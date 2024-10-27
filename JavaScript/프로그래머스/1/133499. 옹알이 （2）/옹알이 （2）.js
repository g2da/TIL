function solution(babbling) {
  const pattern = /^(aya|ye|woo|ma)+$/;
  const target = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let b of babbling) {
    if (target.some((t) => b.includes(t + t))) {
      continue;
    }

    if (pattern.test(b)) {
      answer++;
    }
  }
  return answer;
}
