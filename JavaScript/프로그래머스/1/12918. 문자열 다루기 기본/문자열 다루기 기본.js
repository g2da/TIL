function solution(s) {
  const re = /[A-Za-z]/;
  let answer = s.search(re);
  return answer === -1 && (s.length === 4 || s.length === 6) ? true : false;
}
