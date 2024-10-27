function solution(board, moves) {
  const basket = [];

  return Array.from(moves).reduce((acc, cur) => {
    const doll = pickup(board, cur - 1);

    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        return acc + 2;
      } else {
        basket.push(doll);
      }
    }
    return acc;
  }, 0);
}

function pickup(board, order) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][order] !== 0) {
      const doll = board[i][order];
      board[i][order] = 0;
      return doll;
    }
  }
  return null;
}
