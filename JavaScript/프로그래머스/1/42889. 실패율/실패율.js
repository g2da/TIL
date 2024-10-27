function solution(N, stages) {
  let 도달인원 = stages.reduce(
    (acc, cur) => {
      if (cur <= N) {
        acc[cur - 1] += 1;
      }
      return acc;
    },
    Array.from({ length: N }, () => 0)
  );

  let totalPlayers = stages.length;

  let 실패율arr = 도달인원.map((count, i) => {
    let 실패율 = totalPlayers > 0 ? count / totalPlayers : 0;
    totalPlayers -= count;
    return { stage: i + 1, 실패율 };
  });

  실패율arr.sort((a, b) => b.실패율 - a.실패율 || a.stage - b.stage);

  return 실패율arr.map((item) => item.stage);
}
