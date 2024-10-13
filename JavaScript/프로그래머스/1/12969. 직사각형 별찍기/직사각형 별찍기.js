process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const [a, b] = [Number(n[0]), Number(n[1])];
    for (let i=0; i<b; i++) {
        console.log("*".repeat(a))
    }
});