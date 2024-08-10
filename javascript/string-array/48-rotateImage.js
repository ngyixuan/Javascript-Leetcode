/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var reverse = function(arr){
    let i = 0
    let j = arr.length-1
    while(i<j){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        i++
        j--
    }
        
}
var rotate = function(matrix) {


    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp    
        }
    }

    for (const row of matrix) {
        reverse(row)
        
    }    

    return matrix
};

matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix))