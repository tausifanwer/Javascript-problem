function binary(num) {
  let binaryNum = "";
  while (num > 0) {
    binaryNum += String(num % 2);
    num = Math.floor(num / 2);
  }
  return binaryNum.split("").reverse().join("");
}
const ans = binary(2);
console.log(ans);
