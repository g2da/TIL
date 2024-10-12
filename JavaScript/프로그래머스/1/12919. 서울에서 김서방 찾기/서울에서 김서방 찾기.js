function solution(seoul) {
    const isKim = (target) => {
        return target === "Kim"
    }
    return `김서방은 ${seoul.findIndex(isKim)}에 있다`;
}