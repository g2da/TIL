function solution(lottos, win_nums) {
  const { matchedNums, zeroCount } = Array.from(lottos).reduce(
    (acc, cur) => {
      if (cur === 0) {
        acc.zeroCount += 1;
      } else if (win_nums.includes(cur)) {
        acc.matchedNums += 1;
      }
      return acc;
    },
    { matchedNums: 0, zeroCount: 0 }
  );

  const maxRank = getRank(matchedNums + zeroCount);
  const minRank = getRank(matchedNums);

  return [maxRank, minRank];
}

function getRank(count) {
  return count >= 2 ? 7 - count : 6;
}
