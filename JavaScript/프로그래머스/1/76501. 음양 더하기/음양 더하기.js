function solution(absolutes, signs) {
  let answer = absolutes.reduce((acc, cur, idx) =>
    signs[idx] ? acc + cur : acc - cur, 0
  );
  return answer;
}
