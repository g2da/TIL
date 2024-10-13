function solution(n, m) {
  const [a, b] = [n, m].sort((a, b) => a - b);

  const gcd = (a, b) => {
    let r = b % a;
    return r === 0 ? a : gcd(r, a);
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  return [gcd(a, b), lcm(a, b)];
}
