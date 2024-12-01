function solution(s) {
    const tuples = s
        .slice(2, -2)
        .split("},{")
        .map(str => str.split(",").map(Number));

    tuples.sort((a, b) => a.length - b.length);

    const result = [];
    tuples.forEach(tuple => {
        tuple.forEach(num => {
            if (!result.includes(num)) {
                result.push(num);
            }
        });
    });

    return result;
}
