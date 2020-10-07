function subSetsII(nums){
    let result = [];
    nums = nums.sort((a, b) => a - b)

    function recursive(index, current, nums){
        result.push(current);
        for(let i = index; i < nums.length; i++){
            if(i > index && nums[i] === nums[i - 1]){
                continue;
            }
            recursive(i + 1, [...current, nums[i]], nums)
        }
    }

    recursive(0, [], nums)
    return result;
}

const nums = [1, 2, 2]
console.log(subSetsII(nums))