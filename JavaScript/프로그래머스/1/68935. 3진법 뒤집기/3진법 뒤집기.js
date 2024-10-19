function solution(n) {
  let arr = [];
  while (n > 0) {
    arr.push(n % 3);
    n = Math.floor(n / 3);
  }
  arr.reverse();
  let answer = arr.reduce((acc, cur, idx) => acc + cur * 3 ** idx, 0);

  return answer;
}
