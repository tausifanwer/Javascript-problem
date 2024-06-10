function squareRoot(num) {
  if (num <= 0) {
    return "Input must be positive";
  }
  let ans = Math.sqrt(num);
  return ans.toFixed(3);
}

let num = squareRoot(Number(10));
console.log(num);
