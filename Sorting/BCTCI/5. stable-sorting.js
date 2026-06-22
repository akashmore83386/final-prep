// Now again the same previous deck array is given, this time we have to stable sort that means while sorting based on the values we need to keep the original order. That means if 4's are there then we need to keep them in the output array just as they were in the original input array.

// Now we can solve this easily because javascript's default sort do stable sorting by default

function stableSorting(deck) {
  deck.sort((a, b) => {
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

console.log(stableSorting(myDeck));