function solution(n) {
    let answer = Array.from(String(n), Number)
    answer.sort((a, b) => b - a)
    return arrToNumber(answer);
}

const arrToNumber =  (arr) => {
    return Number(arr.join(""))
}