function countPossibleAnswers(hints) {
  let possibleCount = 0;

  // 100~999의 모든 숫자를 탐색 (각 자리가 1~9)
  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      for (let c = 1; c <= 9; c++) {
        if (a === b || b === c || a === c) continue;

        const candidate = `${a}${b}${c}`;

        let isValid = true;

        for (const [number, strike, ball] of hints) {
          const numberStr = String(number);

          let strikeCount = 0;
          let ballCount = 0;

          for (let i = 0; i < 3; i++) {
            if (candidate[i] === numberStr[i]) {
              strikeCount++;
            } else if (numberStr.includes(candidate[i])) {
              ballCount++;
            }
          }

          if (strikeCount !== strike || ballCount !== ball) {
            isValid = false;
            break;
          }
        }

        if (isValid) {
          possibleCount++;
        }
      }
    }
  }

  return possibleCount;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const hints = input.slice(1).map(line => line.split(' ').map(Number));

console.log(countPossibleAnswers(hints));
