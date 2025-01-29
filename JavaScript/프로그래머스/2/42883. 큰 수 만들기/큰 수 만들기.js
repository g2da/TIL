function solution(number, k) {
    let stack = [];
    let cnt = 0;
    
    for (let num of number) {
        while (Boolean(stack) && stack[stack.length - 1] < num && cnt < k) {
            stack.pop(); 
            cnt += 1;
        }
        stack.push(num);
    }

    while (cnt < k) {
        stack.pop();
        cnt += 1;
    }

    return stack.join(""); 
}
