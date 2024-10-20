function solution(a, b, n) {
    let total = 0;

    while (n >= a) {
        const newCoke = Math.floor(n / a) * b;
        const rest = n % a;
        total += newCoke;
        n = newCoke + rest;
    }

    return total;
}