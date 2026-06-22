// Reverse case match

// "haDrRAHd" -> output true, both spell 'hard'

// need one pass to get all the lower case string, and then need one backward loop to get the upper string, then I can check them both

// OR it is cleaner to collect the upper case normally and then reverse that

// brute force
function solve(string) {
  let lowerCase = "";
  let upperCase = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      lowerCase += string[i];
    } else {
      upperCase += string[i];
    }
  }

  const reversed = upperCase.split("").reverse().join("");

  return lowerCase === reversed.toLowerCase();
}

console.log(solve("haDrRAHd"));

// O(n), O(n) - Creating 2 extra strings of length n

// Two pointer optimal solution

function twoPointer(array) {}