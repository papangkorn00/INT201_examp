// Return the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces.
const getCount = (str) => {
  let count = 0;
  const lowerCase = str.toLowerCase();

  for (const char of lowerCase) {
    if ("aeiou".includes(char)) count++;
  }

  return count;
};

const hello = "hello poom";
const count = getCount(hello);
console.log(count);
