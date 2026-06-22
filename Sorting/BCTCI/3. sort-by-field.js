function sortByField(deck) {
  // since we need any specific order, so I have stored them in the hashmap, so when the values are same then in that case we can sort based on this specific order as they have told us in the question itself
  const deckOrder = new Map([
    ["clubs", 0],
    ["hearts", 1],
    ["spades", 2],
    ["diamonds", 3],
  ]);

  deck.sort((a, b) => {
    if (a.value !== b.value) {
      return a.value - b.value;
    }

    return deckOrder.get(a.suit) - deckOrder.get(b.suit);
  });

  return deck;
}

const myDeck = [
  { value: 10, suit: "diamonds" },
  { value: 10, suit: "clubs" },
  { value: 5, suit: "hearts" },
  { value: 10, suit: "spades" },
  { value: 2, suit: "clubs" },
];

console.log(sortByField(myDeck));