function solution(today, terms, privacies) {
  let termsObj = {};
  terms.forEach((term) => {
    let [type, months] = term.split(" ");
    termsObj[type] = Number(months) * 28;
  });

  const curDays = dateToNumber(today);

  let answer = privacies.reduce((acc, cur, idx) => {
    let [date, type] = cur.split(" ");
    const targetDays = dateToNumber(date) + termsObj[type] - 1;

    if (targetDays < curDays) {
      acc.push(idx + 1);
    }
    return acc;
  }, []);

  return answer;
}

const dateToNumber = (date) => {
  const [y, m, d] = date.split(".").map(Number);
  return y * 12 * 28 + m * 28 + d;
};
