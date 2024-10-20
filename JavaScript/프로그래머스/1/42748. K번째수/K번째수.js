function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let [start, end, k] = commands[i];
    let target = array.slice(start - 1, end).sort((a, b) => a - b);
    answer.push(target[k - 1]);
  }
  return answer;
}
