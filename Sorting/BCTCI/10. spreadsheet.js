// Design a class called Spreadsheet with the following API. Spreadsheets have between 1 and 100 rows and columns. The values at each cell are integers.

// Spreadsheet API:

// new(rows, cols): initializes a spreadsheet with the specified size and 0 in every cell.
// set(row, col, value): sets the cell at (row, col) to value.
// get(row, col): gets the value at (row, col).
// sort_columns_by_row(row): sorts all the columns based on the values in the given row. Sorting should be stable.
// sort_rows_by_column(col): sorts all the rows based on the values in the given column. Sorting should be stable.
// Rows and columns start at 0. Assume that no rows or columns will be out of bounds.

// Example 1:
// spreadsheet = Spreadsheet()
// spreadsheet.new(3, 3)
// spreadsheet.set(0, 0, 5)
// spreadsheet.set(0, 1, 3)
// spreadsheet.set(0, 2, 8)
// spreadsheet.set(1, 0, 6)
// spreadsheet.set(2, 1, 1)
// spreadsheet.sort_columns_by_row(0)
// spreadsheet.sort_rows_by_column(1)
// spreadsheet.get(1, 1)  # Returns 5

// Example 2:
// spreadsheet = Spreadsheet()
// spreadsheet.new(1, 1)
// spreadsheet.set(0, 0, 42)
// spreadsheet.get(0, 0)  # Returns 42

// Example 3:
// spreadsheet = Spreadsheet()
// spreadsheet.new(3, 2)
// spreadsheet.sort_rows_by_column(0)
// spreadsheet.get(0, 0)  # Returns 0

class Spreadsheet {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.sheet = [];
    for (let i = 0; i < rows; i++) {
      this.sheet.push(new Array(cols).fill(0));
    }
  }

  new(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.sheet = [];
    for (let i = 0; i < rows; i++) {
      this.sheet.push(new Array(cols).fill(0));
    }
  }

  set(row, col, value) {
    this.sheet[row][col] = value;
  }

  get(row, col) {
    return this.sheet[row][col];
  }

  sortRowsByColumn(col) {
    this.sheet.sort((a, b) => a[col] - b[col]);
  }

  sortColumnsByRow(row) {
    const columnsWithValues = [];
    for (let col = 0; col < this.cols; col++) {
      columnsWithValues.push([col, this.sheet[row][col]]);
    }

    columnsWithValues.sort((a, b) => a[1] - b[1]);
    const sortedSheet = [];
    for (let r = 0; r < this.rows; r++) {
      const newRow = [];
      for (const [col, _] of columnsWithValues) {
        newRow.push(this.sheet[r][col]);
      }
      sortedSheet.push(newRow);
    }
    this.sheet = sortedSheet;
  }
}
