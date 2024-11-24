function solution(want, number, discount) {
  const targetMap = want.reduce((acc, item, idx) => {
    acc[item] = number[idx];
    return acc;
  }, {});

  const isMatching = (array) => {
    const currentMap = array.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    
    return want.every((item) => currentMap[item] === targetMap[item]);
  };

    const answer = Array.from({ length: discount.length - 9 })
    .reduce((count, _, idx) => {
      if (isMatching(discount.slice(idx, idx + 10))) {
        count += 1;
      }
      return count;
    }, 0);
    
  return answer;
}