function armStrong(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Math.pow(parseInt(num[i]), num.length);
  }
  if (sum === parseInt(num)) {
    return `this number is ${sum} armstrong`;
  } else {
    return `this number is not armstrong`;
  }
}

let num = "153";
console.log(armStrong(num));
