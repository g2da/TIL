function solution(x, n) {
    let answer = Array.from({length: n}, (_, i) => (i+1) * x)
    return answer;
}