function solution(a, b) {
    if (a === b) return a
    let [start, end] = a > b ? [b , a]: [a, b]
    
    let answer = 0
    
    for(i=start; i <= end; i++) {
        answer += i
    }
    
    return answer;
}