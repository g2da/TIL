function solution(A, B) {
  const rowA = A.length;
  const colA = A[0].length;
  const colB = B[0].length;

  const answer = Array.from({ length: rowA }, () => Array(colB).fill(0));

  for (let i = 0; i < rowA; i++) {
    for (let j = 0; j < colB; j++) {
      for (let k = 0; k < colA; k++) {
        answer[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return answer;
}
