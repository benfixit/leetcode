function wordBreak(s, wordDict){
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true

    const wordMap = {};

    for(let i = 0; i < wordDict.length; i++){
        wordMap[wordDict[i]] = true
    }

    // console.log('substring === ', wordMap)
    
    for(let i = 1; i <= s.length; i++){
        for(j = i - 1; j >= 0; j--){
            if(dp[j] && wordMap[s.slice(j, i)]){
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length]
}

// const s = 'fastracecar'
// const s = 'aaaaaaa'
// const dict = ['aaaa', 'aaa']
// const dict = ['astra', 'fast', 'race', 'car']

const s = 'leetcode'
const dict = ['leet', 'code']

console.log(wordBreak(s, dict))