function solution(players, callings) {
  let scoreObj = players.reduce((acc, player, idx) => {
    acc[player] = idx;
    return acc;
  }, {});

  callings.forEach((calling) => {
    const curIndex = scoreObj[calling];

    if (curIndex > 0) {
      const prevPlayer = players[curIndex - 1];

      [players[curIndex - 1], players[curIndex]] = [
        players[curIndex],
        players[curIndex - 1],
      ];

      scoreObj[calling] -= 1;
      scoreObj[prevPlayer] += 1;
    }
  });

  return players;
}
