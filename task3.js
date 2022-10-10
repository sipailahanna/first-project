const [,,N, M] = process.argv;

console.log(fibonacci(+N, +M));

function fibonacci(N, M) {
    const fullFibonacci = getFibonacci(M + N);
    return fullFibonacci.slice(N);
}

function getFibonacci(length) {
    const fibonacci = [];

    while (fibonacci.length < length) {
        if (fibonacci[0] !== 0) {
            fibonacci.push(0);
        } else if(!fibonacci[1]) {
            fibonacci.push(1);
        } else {
            fibonacci.push(fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length - 2]);
        }
    }

    return fibonacci;
}