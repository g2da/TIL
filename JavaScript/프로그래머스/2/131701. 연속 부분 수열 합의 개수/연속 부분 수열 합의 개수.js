function solution(elements) {
  const n = elements.length;
  const obj = {}; 

  const circularArray = elements.concat(elements);

  Array.from({ length: n }, (_, lengthIndex) => {
    const length = lengthIndex + 1; 

    Array.from({ length: n }, (_, idx) => {
      const sum = circularArray
        .slice(idx, idx + length)
        .reduce((acc, num) => acc + num, 0);
      obj[sum] = true;
    });
  });

  return Object.keys(obj).length;
}