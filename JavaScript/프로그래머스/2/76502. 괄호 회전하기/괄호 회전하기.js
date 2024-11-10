const brackets = {
  ")": "(",
  "}": "{",
  "]": "[",
};

const isValid = (str) => {
  const stack = [];
  for (let char of str) {
    if (Object.values(brackets).includes(char)) {
      stack.push(char);
    } else if (brackets[char]) {
      if (stack.pop() !== brackets[char]) return false;
    }
  }
  return stack.length === 0;
};

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const rotatedStr = s.slice(i) + s.slice(0, i);
    if (isValid(rotatedStr)) {
      count++;
    }
  }

  return count;
}
