//  !Fizz buzz challenge
//  TODO: Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of the number, for the multiples of ‘5’ print “Buzz”, and for the multiple of both 3 and 5 print "Fizz-Buzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz-Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
