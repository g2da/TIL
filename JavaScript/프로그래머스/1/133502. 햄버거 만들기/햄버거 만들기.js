function solution(ingredients) {
  const hamburger = [1, 2, 3, 1];
  let answer = 0;

  // reduce로 재료 패턴을 추적하여 answer 업데이트
  const pattern = Array.from(ingredients).reduce((acc, cur) => {
    acc.push(cur);
    if (acc.slice(-4).toString() === hamburger.toString()) {
      acc.splice(-4);
      answer += 1;
    }
    return acc;
  }, []);

  return answer;
}
