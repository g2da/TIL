function solution(number, limit, power) {
  let answer = 0;

  function getDivisorCount(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        count++;
        if (i !== n / i) {
          count++;
        }
      }
    }
    return count;
  }

  for (let i = 1; i <= number; i++) {
    let divisorCount = getDivisorCount(i);
    if (divisorCount > limit) {
      answer += power;
    } else {
      answer += divisorCount;
    }
  }

  return answer;
}
