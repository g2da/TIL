function solution(X, Y) {
  const xCount = Array.from(X).reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const yCount = Array.from(Y).reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const arr = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  const answer = arr
    .reduce((acc, cur) => {
      if (xCount[cur] && yCount[cur]) {
        const XYCount = Math.min(xCount[cur], yCount[cur]);
        acc.push(cur.repeat(XYCount));
      }
      return acc;
    }, [])
    .join("");

  if (answer === "") return "-1";
  if (answer[0] === "0") return "0";
  return answer;
}
