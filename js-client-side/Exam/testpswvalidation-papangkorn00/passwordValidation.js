// Write your student id, firstname, and lastname in a single line comment here
// 65130500041 Papangkorn Kijsakulrat

function isPasswordValid(password) {
  if (password === null || password === undefined) {
    return false;
  }

  const length = password.length >= 8;
  const num = password.match(/[0-9]/);
  const lower = password.match(/[a-z]/);
  const upper = password.match(/[A-Z]/);
  const special = password.match(/[@#$%^&*!]/);

  return length && num && lower && upper && special ? true : false;

//   const allChar =
//     "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 @ # $ % ^ & * !"

//   if (!password || password.length < 8) {
//     return false
//   }

//   for (const all of allChar) {
//     if (password.includes(all)) {
//       return false
//     }
//   }
//   return true
}

module.exports = isPasswordValid

// Example usage
const password = "%5Ko&$pp"
const isValid = isPasswordValid(password)
console.log(isValid)
