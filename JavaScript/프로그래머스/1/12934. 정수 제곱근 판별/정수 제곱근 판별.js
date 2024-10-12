function solution(n) {
    let target = Math.sqrt(n)
    return Number.isInteger(target) ? (target + 1) ** 2 : -1 ;
}