function solution(n, lost, reserve) {
  let reservePerson = new Set(reserve.filter(x => !lost.includes(x)));
  let lostPerson = new Set(lost.filter(x => !reserve.includes(x)));

  Array.from(reservePerson).sort((a, b) => a - b).forEach(i => {
    if (lostPerson.has(i - 1)) {
      lostPerson.delete(i - 1); 
    } else if (lostPerson.has(i + 1)) {
      lostPerson.delete(i + 1); 
    }
  });

  return n - lostPerson.size;
}