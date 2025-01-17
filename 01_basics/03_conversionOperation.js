let score = "33"

let numscore=Number(score)

let flag=true

let numflag=Number(flag)

//console.table([numscore,numflag])//


function ispresent(i,nums){
    for(i=0;i<nums.length;++i){
        if(nums[i]==1){
            return true
            
        }
        
        
    }
    return false
}

arr=[0,2,4,2,1]
console.log(ispresent(0,arr))