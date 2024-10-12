function solution(price, money, count) {
  let totalCost = Array.from({ length: count }, (v, i) =>
    Number((i + 1) * price)
  ).reduce((acc, cur) => acc + cur);
  return totalCost > money ? totalCost - money : 0;
}
