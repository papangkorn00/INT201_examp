function countCovidStatus(covidStatusArray) {
  if (covidStatusArray === null || covidStatusArray === undefined)
    return undefined;

  // Initialize an object to store the counts
  const counts = {
    "negative and low risk": 0,
    "negative and high risk": 0,
    positive: 0,
  };

  // Loop through the array and count occurrences
  for (const status of covidStatusArray) {
    if (
      status === "negative and low risk" ||
      status === "negative and high risk" ||
      status === "positive"
    ) {
      // Increment the count for the corresponding status
      counts[status]++;
    }
  }

  return counts;
}

// Example usage:
const covidStatusArray = [
  "negative and low risk",
  "positive",
  "negative and low risk",
  "negative and high risk",
];
const counts = countCovidStatus(covidStatusArray);
console.log(counts);
