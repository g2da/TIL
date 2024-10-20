function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    let target = goal[i];

    if (cards1.length > 0 && cards1[0] === target) {
      cards1.shift();
    } else if (cards2.length > 0 && cards2[0] === target) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
