function solution(A, B) {
  let x = A.sort((a, b) => a - b);
  let y = B.sort((a, b) => b - a);
  let answer = x.reduce((acc, cur, idx) => acc + cur * y[idx], 0);
  return answer;
}
