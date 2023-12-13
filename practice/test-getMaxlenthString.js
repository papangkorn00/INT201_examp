 function getMaxlengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined) {
    return undefined;
  }

  let maxLength = "";
  for (const String of arrayOfString) {
    if (String.length > maxLength.length) {
      maxLength = String;
    }
  }
  return maxLength;
}

const stringArray = ["poompoom", "meen", "haha", "Yes"];
console.log(getMaxlengthString(stringArray));
