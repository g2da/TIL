function solution(s) {
  let obj = {};
  let answer = [];

  s.split("").forEach((target, idx) => {
    answer.push(target in obj ? idx - obj[target] : -1);
    obj[target] = idx;
  });

  return answer;
}
