function solution(left, right) {
  let sum = 0;
  const countNum = (x) => {
    let cnt = 0;
    for (let i = 1; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        i * i === x ? (cnt += 1) : (cnt += 2);
      }
    }
    return cnt;
  };

  for (let i = left; i <= right; i++) {
    let target = countNum(i);
    target % 2 === 0 ? (sum += i) : (sum -= i);
  }
  return sum;
}
