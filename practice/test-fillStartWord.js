function fillStartWord(startWord, word) {
  if (word === null || word === undefined) {
    return undefined;
  } else if (word.includes(fillStartWord)) {
    return word;
  } else return startWord + word;
}

const word1 = "Hi"
const word2 = "Poom"
const test = fillStartWord(word1,word2)
console.log(test);
