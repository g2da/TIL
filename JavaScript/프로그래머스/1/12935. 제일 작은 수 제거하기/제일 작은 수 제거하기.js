function solution(arr) {
  let target = [...arr].sort((a, b) => a - b).splice(1);
  let answer = arr.filter((x) => target.includes(x));
  return answer.length ? answer : [-1];
}
