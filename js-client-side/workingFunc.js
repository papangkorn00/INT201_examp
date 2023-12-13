const sayGoodbye = () => {
  return "good bye";
};

const doSomething = () => {
  return sayGoodbye;
};

const doIt = doSomething();
console.log(doIt());

