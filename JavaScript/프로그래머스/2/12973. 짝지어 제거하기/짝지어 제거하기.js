function solution(s) {
  const result = s.split("").reduce((acc, cur) => {
    if (acc.length > 0 && acc[acc.length - 1] === cur) {
      acc.pop();
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  return result.length === 0 ? 1 : 0;
}
