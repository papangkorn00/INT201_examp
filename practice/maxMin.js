function findMaxAndMin(numbers) {
  let max = -Infinity;
  let min = Infinity;
  numbers.forEach((num) => {
    if (num > max) {
      max = num;
    } else if (num < min) {
      min = num;
    }
  });
  return { max, min };
}

const numbers = [1, 3, 5, 7, 9];
const result = findMaxAndMin(numbers);
console.log(`Max number is ${result.max}`);
console.log(`Min number is ${result.min}`);
