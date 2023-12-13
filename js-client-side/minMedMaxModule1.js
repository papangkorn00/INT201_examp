function minMedMax(num1, num2, num3) {
  const numbers = [num1, num2, num3]

  numbers.sort((a, b) => a - b)

  const min = numbers[0]
  const med = numbers[1]
  const max = numbers[2]

  return {min: min, med: med, max: max}
}

const result = minMedMax(9,4,2);
console.log(result);