function solve(matrix, target) {
    let row = 0
    let col = matrix[0].length - 1

    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] < target) {
            row++
        } else if(matrix[row][col] > target) {
            col--
        } else {
            return true 
        }
    }

    return false
}

console.log(solve([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], 12))