function solution(dartResult) {
  const dartArr = Array.from(dartResult);
  const result = [];
  let score = 0;

  dartArr.reduce((acc, cur) => {
    if (!isNaN(cur)) {
      score = score * 10 + parseInt(cur); // 10일때
    } else if (cur === "S" || cur === "D" || cur === "T") {
      if (cur === "D") score **= 2;
      if (cur === "T") score **= 3;
      result.push(score);
      score = 0;
    } else if (cur === "*" || cur === "#") {
      const lastIndex = result.length - 1;
      if (cur === "*") {
        result[lastIndex] *= 2;
        if (lastIndex > 0) result[lastIndex - 1] *= 2;
      } else if (cur === "#") {
        result[lastIndex] *= -1;
      }
    }
    return acc;
  }, 0);

  return result.reduce((sum, score) => sum + score, 0);
}
