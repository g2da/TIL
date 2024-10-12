function solution(phone_number) {
  let hidden = "*".repeat(phone_number.length - 4);
  let answer = phone_number.slice(-4);
  return hidden + answer;
}
