// ?For this challenge you will be determining whether a number is part of the Fibonacci sequence.
// TODO: Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

function fibonacciChecker(num) {
  const fibonacci = [0, 1];
  let i = 2;
  while (fibonacci[i - 1] < num) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    i++;
  }

  return fibonacci.includes(num) ? "yes" : "no";
}

console.log(fibonacciChecker(1));
