function solution(new_id) {
  var answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.*|\.*$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.*$/g, "");

  return answer.length < 3
    ? answer.padEnd(3, answer[answer.length - 1])
    : answer;
}
