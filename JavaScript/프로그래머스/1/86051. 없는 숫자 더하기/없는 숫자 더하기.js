function solution(numbers) {
  let arr = Array.from({ length: 10 }, (v, i) => i);
  let result = arr.filter((x) => !numbers.includes(x));

  return result.reduce((prev, cur) => prev + cur);
}
