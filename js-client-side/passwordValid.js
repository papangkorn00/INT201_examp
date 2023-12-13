function isPasswordValid(password) {
  const upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
  const lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  const digit = "0 1 2 3 4 5 6 7 8 9";
  const specialChar = "@ # $ % ^ & * !";

  if (password === null || password === undefined || password.length < 8) {
    return false;
  }

  for (const upper of upperCase) {
    if (password.includes(upper)) {
      for (const lower of lowerCase) {
        if (password.includes(lower)) {
          for (const digitNum of digit) {
            if (password.includes(digitNum)) {
              for (const special of specialChar) {
                if (password.includes(special)) {
                  return true;
                }
              }
            }
          }
        }
      }
    }
  }

  return false;
}

// test
const password = '' ;
const isValid = isPasswordValid(password);
console.log(isValid);
