function solution(s) {
  const numbers = Array.from(s.split(" "), Number);
  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}
