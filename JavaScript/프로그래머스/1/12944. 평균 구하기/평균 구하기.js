function solution(arr) {
    let sum = arr.reduce((acc, cur) => acc + cur)
    let len = arr.length
    return sum/len;
}