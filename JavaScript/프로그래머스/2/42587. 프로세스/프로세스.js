function solution(priorities, location) {
    let queue = priorities.map((priority, idx) => [priority, idx]);
    let result = 0;

    while (queue.length > 0) {
        const [priority, idx] = queue.shift();
        if (queue.some(([p]) => p > priority)) {
            queue.push([priority, idx]);
        } else {
            result++;
            if (idx === location) return result; 
        }
    }
}
