function solution(s) {
  let cnt = 0;
  let steps = 0;
    
  while (s !== "1") {
    let result = replaceAndCount(s, cnt);
    s = result.newStr.length.toString(2);
    [cnt, steps] = [
      result.count,
      steps + 1,
    ];
  }
  return [steps, cnt];
}

function replaceAndCount(str, cnt) {
  const matchCount = (str.match(new RegExp("0", "g")) || []).length;
  const newStr = str.replaceAll("0", "");

  return {
    newStr,
    count: cnt + matchCount,
  };
}
