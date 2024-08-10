/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let need = new Map()
    let window = new Map()

    for (const item of s1) {
        need.set(item, (need.get(item) ||0)+1)
    }

    let left = 0 , right = 0 
    let valid = 0

    while(right<s2.length){
        let c = s2[right]
        right++
        if(need.has(c)){
            window.set(c, (window.get(c)||0)+1)
            if(window.get(c)===need.get(c)){
                valid++
            }
        }
        while(right-left>=s1.length){
            if(need.size === valid){ 
                return true
            }
            let d = s2[left]
            left++
            if(need.has(d)){
                if(window.get(d)===need.get(d)){
                    valid--
                }
                window.set(d, window.get(d)-1)
                
            }
            console.log(" d:", d, " s2[left]:", s2[left])
        }



    }
    return false

};

let s1 = "abc"
let s2 = "bbbca"

console.log(checkInclusion(s1,s2))