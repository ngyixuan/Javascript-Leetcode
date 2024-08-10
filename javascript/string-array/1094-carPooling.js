/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */


var Difference = function(trips, capacity){
    this.n = 1001
    this.trips = trips
    this.capacity = capacity
    this.diff = new Array(this.n).fill(0)

    Difference.prototype.increment = function(i,j,val){
        this.diff[i]+=val
        if(j+1<this.n){
            this.diff[j+1]-=val
        }
    }

    Difference.prototype.result = function(){
        var res = new Array(this.n)
        res[0] = this.diff[0]
        for (let i = 1; i < this.n; i++) {
            res[i] = res[i-1]+this.diff[i]  
        }
        return res
    }

    Difference.prototype.getModifiedArray =function(){

       
        for (let i = 0; i < this.trips.length; i++) {
            var passenger = this.trips[i][0]
            var from = this.trips[i][1]
            var to = this.trips[i][2]-1
            this.increment(from,to,passenger)    
        }

        return this.result()

    }

}
var carPooling = function(trips, capacity) {
    var num = new Difference(trips, capacity)
    var res = num.getModifiedArray()

    for (let i = 0; i < res.length; i++) {
        if(res[i]>capacity){
            return false
        }
        
    }
    return true
};

let trips = [[2,1,5],[3,3,7]]
let  capacity = 4

console.log(carPooling(trips, capacity))
