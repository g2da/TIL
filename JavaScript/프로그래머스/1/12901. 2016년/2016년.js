let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function solution(a, b) {
  let sum = month.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0);
  let totalDays = sum + b - 1;

  let answer = day[totalDays % 7];

  return answer;
}
