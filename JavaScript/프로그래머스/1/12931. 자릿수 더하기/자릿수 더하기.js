function solution(n)
{
    var answer = Array.from(String(n), Number).reduce((prev, cur)=> prev + cur)

    return answer;
}