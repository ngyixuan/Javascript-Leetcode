/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    let need = new Map()
    let window = new Map()

    for (const item of p){
        need.set(item, (need.get(item)||0)+1)
    }
  
    let left = 0 
    let right = 0
    let valid =0
    let res = []
    while(right<s.length){
        let c = s[right]
        right++
        if(need.has(c)){
            window.set(c,(window.get(c)||0)+1)
            if(need.get(c)===window.get(c)){
                valid++
            }
        }
        while(right-left>=p.length){
            if(valid === need.size){
                res.push(left)
            }
            let d = s[left]
            left++
            if(need.has(d)){
                if(window.get(d)===need.get(d)){
                    valid--
                }
                window.set(d,window.get(d)-1)
            }

        }
    }

    return res


    
};

let s = "cbaebabacd"
let p = "abc"
console.log(findAnagrams(s,p))
