function cal(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num2 - num1;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Error";
      } else {
        result = num1 / num2;
        break;
      }
    default:
      return "Error";
  }
  return result;
}

const num1 = 9;
const num2 = 3;
const ans = cal(num1, num2, "/");
console.log(ans);
