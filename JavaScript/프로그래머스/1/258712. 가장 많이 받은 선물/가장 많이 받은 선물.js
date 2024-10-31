function solution(friends, gifts) {
  let friendsCnt = friends.length;
  let giftScore = Array(friendsCnt).fill(0);
  let answer = Array(friendsCnt).fill(0);
  let giftLists = Array.from({ length: friendsCnt }, () =>
    Array(friendsCnt).fill(0)
  );

  let friendIndices = new Map(friends.map((friend, idx) => [friend, idx]));

  gifts.forEach((now) => {
    let [give, get] = now.split(" ");
    let giveIdx = friendIndices.get(give);
    let getIdx = friendIndices.get(get);

    giftLists[giveIdx][getIdx]++;
    giftScore[giveIdx]++;
    giftScore[getIdx]--;
  });

  for (let i = 0; i < friendsCnt; i++) {
    for (let j = i + 1; j < friendsCnt; j++) {
      if (giftLists[i][j] > giftLists[j][i]) {
        answer[i]++;
      } else if (giftLists[i][j] < giftLists[j][i]) {
        answer[j]++;
      } else {
        if (giftScore[i] > giftScore[j]) {
          answer[i]++;
        } else if (giftScore[i] < giftScore[j]) {
          answer[j]++;
        }
      }
    }
  }

  return Math.max(...answer);
}
