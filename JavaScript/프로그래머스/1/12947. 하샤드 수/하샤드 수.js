function solution(x) {
    let target = Array.from(String(x), Number).reduce((cur, prev) => cur + prev)
    let answer = x % target === 0
    return answer;
}