function solution(s, skip, index) {
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz").filter(
    (target) => !skip.includes(target)
  );

  return Array.from(s).reduce((acc, cur) => {
    const curIndex = alphabet.indexOf(cur);
    const newIndex = (curIndex + index) % alphabet.length;
    return acc + alphabet[newIndex];
  }, "");
}