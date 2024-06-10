function shuffleDeck() {
  const deck = [];
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  const ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
  ];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push(`${rank} of ${suit}`);
    }
  }
  console.log(`${deck}`);
  const newDeck = deck.sort(() => Math.random() - 0.5);
  console.log(`${newDeck}`);
  return newDeck;
}

shuffleDeck();
