function solution(s){
    let answer = 1
    let target = Array.from(s, (x) => {
        if( x === "p" || x === "P") answer += 2
        if (x === "y" || x === "Y" ) answer -= 2
    })
    return answer === 1;
}