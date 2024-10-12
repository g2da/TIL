function solution(n) {
  let answer = Array.from({ length: n }, (v, i) => (i % 2 ? "박" : "수")).join(
    ""
  );
  return answer;
}
