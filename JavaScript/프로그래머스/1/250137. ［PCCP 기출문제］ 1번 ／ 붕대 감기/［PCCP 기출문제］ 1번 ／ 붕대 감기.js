function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const maxHealth = health;
  const endTime = attacks[attacks.length - 1][0];

  const attackObj = attacks.reduce((acc, [time, damage]) => {
    acc[time] = damage;
    return acc;
  }, {});

  let [curTime, curHealth] = [0, health];

  for (let i = 0; i <= endTime; i++) {
    if (i in attackObj) {
      curTime = 0;
      curHealth -= attackObj[i];

      if (curHealth <= 0) {
        return -1;
      }
      continue;
    }

    curTime += 1;
    curHealth += x;

    if (curTime === t) {
      curHealth += y;
      curTime = 0;
    }

    curHealth = Math.min(curHealth, maxHealth);
  }

  return curHealth;
}
