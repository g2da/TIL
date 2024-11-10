function solution(n) {
  let x = n.toString(2);
  if (!x.includes("0")) {
    return parseInt(x.replace("11", "101"), 2);
  }

  let count1의개수 = (num) => num.toString(2).split("1").length - 1;
    
  let n의1의개수 = count1의개수(n);
  let next = n + 1;

  while (true) {
    if (count1의개수(next) === n의1의개수) {
      return next;
    }
    next++;
  }
}
