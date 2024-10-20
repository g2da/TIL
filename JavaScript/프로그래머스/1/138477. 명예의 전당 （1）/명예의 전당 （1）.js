function solution(k, score) {
  let target = [];
  let answer = [];

  score.forEach((s) => {
    target.push(s);
    target.sort((a, b) => b - a);

    if (target.length > k) {
      target.pop();
    }

    answer.push(target[target.length - 1]);
  });

  return answer;
}
