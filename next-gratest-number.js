// ! Permutation - Determine the next greatest number using the same numbers of a given argument.
// Todo: Have the function nextGreatestNumber(num) take the num parameter being passed and return the next number greater than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).

function nextGreatestNumber(num) {
  const numberString = num.toString();
  let untraversedNumbers;
  let traversedNumbers;
  let numberToSwap;

  for (let i = numberString.length - 1; i >= 1; i--) {
    if (numberString[i] > numberString[i - 1]) {
      numberToSwap = numberString[i - 1];
      untraversedNumbers = numberString.slice(0, i - 1);
      traversedNumbers = numberString.slice(i - 1 + 1);
      break;
    }
  }

  if (traversedNumbers) {
    let sortedTraversedNumbers = Array.from(traversedNumbers).sort().join("");
    let newNumberToSwap;

    for (let i = 0; i < sortedTraversedNumbers.length; i++) {
      if (sortedTraversedNumbers[i] > numberToSwap) {
        newNumberToSwap = sortedTraversedNumbers[i];
        sortedTraversedNumbers = sortedTraversedNumbers.replace(
          sortedTraversedNumbers[i],
          numberToSwap
        );
        break;
      }
    }

    return untraversedNumbers + newNumberToSwap + sortedTraversedNumbers;
  }

  return -1;
}

console.log(nextGreatestNumber(11121)); // 11211
console.log(nextGreatestNumber(41352)); // 41523
console.log(nextGreatestNumber(123)); // 132
console.log(nextGreatestNumber(12453)); // 12534
console.log(nextGreatestNumber(999)); // -1
console.log(nextGreatestNumber(534976)); // 536479
console.log(nextGreatestNumber(754912)); // 754921
console.log(nextGreatestNumber(1112113421)); // 1112114123
console.log(nextGreatestNumber(76666666)); // -1
console.log(nextGreatestNumber(12)); // 21
