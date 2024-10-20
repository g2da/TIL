function solution(s, n) {
  var target = s
    .split("")
    .map((i) => convertChar(i, n))
    .join("");
  return target;
}

const convertChar = (char, n) => {
  let charCode = char.charCodeAt();

  if (charCode === 32) return char;

  if (charCode >= 65 && charCode <= 90) {
    return String.fromCharCode(((charCode - 65 + n) % 26) + 65);
  }

  if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(((charCode - 97 + n) % 26) + 97);
  }

  return char;
};
