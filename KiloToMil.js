function kilometerToMiles(kilo) {
  return (kilo * 0.621371).toFixed(3);
}

let kilo = Number(2);
const ans = kilometerToMiles(kilo);
console.log(`Ans is ${ans} km`);
