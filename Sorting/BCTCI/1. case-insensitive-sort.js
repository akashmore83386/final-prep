// ["Akash", "akash", "30", "12", "1", "GRAPES"]

function caseInsensitiveSort(array) {
  // Actually we need to sort this in descending order
  array.sort((a, b) => {
    const stringA = a.toLowerCase();
    const stringB = b.toLowerCase();

    if (stringA > stringB) return -1; // stringA comes first
    if (stringA < stringB) return 1; // stringB comes first

    return 0;
  });

  return array;
}

console.log(caseInsensitiveSort(["Akash", "akash", "30", "12", "1", "GRAPES"]));