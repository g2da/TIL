function solution(n, words) {
  const result = Array.from({ length: words.length }).reduce(
    (acc, _, i) => {
      if (acc.isFinished) return acc;

      let prev = words[i - 1] || null;
      let cur = words[i];

      if (i > 0) {
        if (
          (prev && prev[prev.length - 1] !== cur[0]) ||
          acc.usedWords.has(cur)
        ) {
          acc.isFinished = true;
          acc.person = (i % n) + 1;
          acc.turn = Math.floor(i / n) + 1;
        }
      }

      acc.usedWords.add(cur);
      return acc;
    },
    { usedWords: new Set(), isFinished: false, person: 0, turn: 0 }
  );

  return result.isFinished ? [result.person, result.turn] : [0, 0];
}
