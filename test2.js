// function subsetSum(arr, sum){
//     let dp = [];
//     for(let i = 0; i < arr.length; i++){
//         dp[i] = []
//         for (j = 0; j < sum + 1; j++){
//             if(j === 0){
//                 dp[i][j] = true
//             } else {
//                 dp[i][j] = false
//             }
//         }
//     }

//     for(let i = 0; i < arr.length; i++){
//         for (j = 1; j < sum + 1; j++){
//             if(i === 0){
//                 if(arr[i] === j){
//                     dp[i][j] = true
//                 }
//             } else {
//                 if(arr[i] > j){
//                     dp[i][j] = dp[i - 1][j]
//                 } else {
//                     dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i]]
//                 }
//             }
//         }
//     }

//     console.log(dp)

//     return dp[arr.length - 1][sum]
// }

function subsetSum(nums, halfSum){
    let dp = [];
    for(let i = 0; i <= nums.length; i++){
        dp[i] = []
        for(let j = 0; j <= halfSum; j++){
            if(j === 0){
                dp[i][j] = true
            } else{
                dp[i][j] = false
            }
        }
    }
    
    for(let i = 1; i <= nums.length; i++){
        for(let j = 1; j <= halfSum; j++){
            if(i === 1){
                dp[i][j] = nums[i] === j ? true : false
            } else {
                if(nums[i] > j){
                    dp[i][j] = dp[i - 1][j]
                } else{
                    dp[i][j] = dp[i - i][j] || dp[i - 1][j - nums[i]]
                }
            }
        }
    }

    console.log(dp)
    
    // return dp[nums.length][halfSum]
}

const arr = [2, 3, 7, 8, 10]

const sum = 11

console.log(subsetSum(arr, sum))