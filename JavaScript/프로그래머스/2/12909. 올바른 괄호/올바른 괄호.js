function solution(s) {
  let answer = s
    .split("")
    .reduce((acc, cur) => (cur === "(" && acc >= 0 ? acc + 1 : acc - 1), 0);
  return Boolean(!answer);
}
