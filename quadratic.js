function quadratic(a, b, c) {
  if (a === 0) {
    return "a!=0";
  }
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return "no real roots";
  }
  const root1 = -b + discriminant / (2 * a);
  const root2 = -b - discriminant / (2 * a);
  return `Two roots are ${root1.toFixed(3)} and ${root2.toFixed(3)}`;
}

let a = Number(1);
let b = Number(2);
let c = Number(1);
let ans = quadratic(a, b, c);
console.log(`Ans is ${ans}`);
