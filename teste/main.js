let nums = [2,5,1,11,15];
var entrada = 6;
var twoSum = function(nums, entrada){
    let mp = new Map()
    for(let i = 0; i < nums.length; i++) {
        let diff = entrada - nums[i]
        if(mp.has(diff)) {
            return[i,mp.get(diff)]
        }
        mp.set(nums[i], i)
    }
}