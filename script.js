function fibonacci(num) {
    if (num === 0) return 0; // The 0th Fibonacci number
    if (num === 1) return 1; // The 1st Fibonacci number

    let a = 0; // F(0)
    let b = 1; // F(1)
    let fib = 0;

    for (let i = 2; i <= num; i++) {
        fib = a + b; // F(n) = F(n-1) + F(n-2)
        a = b; // Move to the next Fibonacci number
        b = fib; // Update b to the current Fibonacci number
    }

    return fib; // Return the nth Fibonacci number
}

module.exports = fibonacci;
