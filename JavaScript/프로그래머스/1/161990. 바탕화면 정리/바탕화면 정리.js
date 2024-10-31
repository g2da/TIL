function solution(wallpaper) {
  let [top, bottom, left, right] = [Infinity, 0, Infinity, 0];

  wallpaper.forEach((row, x) => {
    row.split("").forEach((target, y) => {
      if (target === "#") {
        top = Math.min(top, x);
        bottom = Math.max(bottom, x);
        left = Math.min(left, y);
        right = Math.max(right, y);
      }
    });
  });

  return [top, left, bottom + 1, right + 1];
}
