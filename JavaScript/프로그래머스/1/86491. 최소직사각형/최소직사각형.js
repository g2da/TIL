function solution(sizes) {
  let w = 0;
  let h = 0;
  let answer = Array.from(sizes, (v) => {
    v.sort((a, b) => a - b);
    w = Math.max(w, v[0]);
    h = Math.max(h, v[1]);
  });
  return w * h;
}
