function solution(survey, choices) {
  let count = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  const updateCount = (score, left, right) => {
    if (score <= 3) {
      count[left] += 4 - score;
    } else if (score >= 3) {
      count[right] += score - 4;
    }
  };
  survey.forEach((result, idx) => {
    const [left, right] = result.split("");
    updateCount(choices[idx], left, right);
  });

  const answer = [
    count["R"] >= count["T"] ? "R" : "T",
    count["C"] >= count["F"] ? "C" : "F",
    count["J"] >= count["M"] ? "J" : "M",
    count["A"] >= count["N"] ? "A" : "N",
  ].join("");

  return answer;
}
