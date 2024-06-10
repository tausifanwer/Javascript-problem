function toFahren(deg) {
  return (deg * 9) / 5 + 32;
}

function toCel(deg) {
  return ((deg - 32) * 5) / 9;
}

let deg = Number(32);
console.log(`fahrenheit to celsius ${toCel(deg).toFixed(1)} deg`);
console.log(`celsius to fahrenheit ${toFahren(deg).toFixed(1)} deg`);
