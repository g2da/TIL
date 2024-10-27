function solution(keymap, targets) {
  const Obj = {};

  keymap.forEach((keys) => {
    Array.from(keys).forEach((v, i) => {
      if (Obj[v] === undefined || Obj[v] > i + 1) {
        Obj[v] = i + 1;
      }
    });
  });

  return targets.map((target) => {
    return Array.from(target).reduce((acc, cur) => {
      if (Obj[cur] === undefined) {
        return -1;
      }
      return acc === -1 ? -1 : acc + Obj[cur];
    }, 0);
  });
}
