function solution(name, yearning, photo) {
  let obj = name.reduce((acc, cur, idx) => {
    acc[cur] = yearning[idx];
    return acc;
  }, {});

  let answer = Array.from(photo, (group) => {
    return group.reduce((acc, cur) => {
      return acc + (obj[cur] || 0);
    }, 0);
  });

  return answer;
}
