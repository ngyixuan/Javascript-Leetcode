/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var matrix = new Array(n).fill().map(()=>new Array(n).fill(0))
    var left = 0
    var right = n-1
    var top = 0
    var bottom = n-1

    var num = 1
    

    while(num<=n*n){
        if(top<=bottom){
            for (let i = left; i<=right; i++) {
                matrix[top][i] = num
                num++
            }
            top++
            
        }
        if(left<=right){
            for (let i = top; i<=bottom; i++) {
                matrix[i][right] = num
                num++
            }
            right--
        }
        if(top<=bottom){
            for (let i = right; i>=left; i--) {
                matrix[bottom][i] = num
                num++
            }
            bottom--
        }
        if(left<=right){
            for (let i = bottom; i>=top; i--) {
                matrix[i][left] = num
                num++
            }
            left++
        }

    }

    return matrix
};

console.log(generateMatrix(3))