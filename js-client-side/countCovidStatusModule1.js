function countCovidStatus(covidStatusArray) {
  if (!covidStatusArray) return undefined
  if (covidStatusArray.length === 0) return {}

  let negativeLow = 0
  let negativeHigh = 0
  let positive = 0

  for (const status of covidStatusArray) {
    if (status === "negative and low risk") negativeLow++
    else if (status === "negative and high risk") negativeHigh++
    else if (status.toLowerCase() === "positive") positive++
  }

  const statusObject = {}
  if (negativeLow > 0) statusObject["negative and low risk"] = negativeLow
  if (negativeHigh > 0) statusObject["negative and high risk"] = negativeHigh
  if (positive > 0) statusObject["positive"] = positive
  return statusObject
}

const testArray = ['hi']
console.log(countCovidStatus(testArray))
