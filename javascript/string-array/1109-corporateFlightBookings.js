/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var Difference = function(bookings, n) {
    this.bookings = bookings
    this.n = n
    this.diff = []
    if(this.n>0){
        this.diff = new Array(this.n).fill(0)
    }
}
Difference.prototype.increment = function(i,j,val){
    this.diff[i]+=val 
    if(j+1<this.n){
        this.diff[j+1]-=val
    }

}

Difference.prototype.result = function(){
    var res  = new Array(this.n)
    res[0] = this.diff[0]
    for (let i = 1; i < this.diff.length; i++) {
        res[i] = res[i-1]+this.diff[i]
    }
    return res
}

Difference.prototype.getModifiedArray = function(){

    for (let i = 0; i < this.bookings.length; i++) {
        var updates = this.bookings[i]
        var first  = updates[0]-1
        var last  = updates[1]-1
        var val = updates[2]
        this.increment(first,last,val)
    }

    return this.result()
}

var corpFlightBookings = function(bookings, n) {
    var df = new Difference(bookings,n)
    var res = df.getModifiedArray()
 
    return res
};



