// We are given the same previous deck array, now this time, we have been asked to sort by the suits primarily in this way (Hearts < Clubs < Diamonds < Spades), and if the suits are same then we need to sort by values in ascending order

function newDeckOrder(deck) {
  const deckOrder = new Map([
    ["hearts", 0],
    ["clubs", 1],
    ["diamonds", 2],
    ["spades", 3],
  ]);

  deck.sort((a, b) => {
    if (a.suit !== b.suit) {
      return deckOrder.get(a.suit) - deckOrder.get(b.suit);
    }

    return a.value - b.value;
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

console.log(newDeckOrder(myDeck));
