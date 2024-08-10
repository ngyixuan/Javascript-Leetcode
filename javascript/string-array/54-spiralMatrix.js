/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res = []
    var dir = 0
    var top = 0
    var bottom = matrix.length-1
    var left = 0
    var right = matrix[0].length-1

    while(top<=bottom && left<=right){
        if(dir==0){
            for (let i = left; i <= right; i++) {
                res.push(matrix[top][i])
            }
            top++
        }
        else if (dir==1){
            for (let i = top; i <= bottom; i++) {
                res.push(matrix[i][right])
                
            }
            right--
        }
        else if(dir ==2){
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i])
                
            }
            bottom--
        }
        else if(dir==3){
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left])
                
            }
            left++
        }

        dir = (dir+1)%4
      
    }
    return res
    
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder(matrix))