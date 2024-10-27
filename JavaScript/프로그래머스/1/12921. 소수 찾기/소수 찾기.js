function solution(n) {
  if (n < 2) return 0;
  if (n === 2) return 1;
  if (n === 3) return 2;

  let count = 1;
  for (let i = 3; i <= n; i += 2) {
    let isPrime = true;
    for (let j = 3; j * j <= i; j += 2) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) count++;
  }

  return count;
}
