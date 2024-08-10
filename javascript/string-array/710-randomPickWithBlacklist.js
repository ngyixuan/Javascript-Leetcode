/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
    this.mapping = new Map()
    this.sz = n-blacklist.length
    this.last = n-1
    console.log(this.sz)

    for (let i = 0; i < blacklist.length; i++) {
        this.mapping.set(blacklist[i], 666)
    }
    for (item of blacklist){
        // console.log(item)
        if(item>this.sz){
            continue
        }
        while(this.mapping[last]){
            last--
        }
        this.mapping[item] = this.last
        last--
    }

    
    
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
let n = 7
let blacklist = [2, 3, 5]
var obj = new Solution(n, blacklist)