function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

function getBMIMeaning(weight, height) {
  const bmi = calculateBMI(weight, height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else {
    return "Overweight";
  }
}

const weight1 = 65; // kg
const height1 = 1.8; // meters
const result1 = getBMIMeaning(weight1, height1);
console.log(`BMI Result 1: ${result1}`);
