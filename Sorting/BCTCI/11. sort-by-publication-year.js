class Book {
  constructor(title, author, pageCount, genre, yearPublished) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.genre = genre;
    this.yearPublished = yearPublished;
  }
}

function bucketSort(books) {
  if (!books.length) return [];
  const minYear = Math.min(...books.map((book) => book.yearPublished));
  const maxYear = Math.max(...books.map((book) => book.yearPublished));
  const buckets = Array.from({ length: maxYear - minYear + 1 }, () => []);
  for (const book of books) {
    buckets[book.yearPublished - minYear].push(book);
  }
  const res = [];
  for (const bucket of buckets) {
    for (const book of bucket) {
      res.push(book);
    }
  }
  return res;
}
