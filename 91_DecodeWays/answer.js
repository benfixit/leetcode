function numDecodings(s){
    let dp = Array.from((new Array(s.length + 1)).fill(0))

    dp[0] = 1;
    dp[1] = s.charAt(0) === '0' ? 0 : 1;

    for(let i = 2; i <= s.length; i++){
        const oneDigit = parseInt(s.substr(i - 1, 1))
        const twoDigit = parseInt(s.substr(i - 2, 2))

        if(oneDigit >= 1){
            dp[i] += dp[i - 1]
        }
        if(twoDigit >= 10 && twoDigit <= 26){
            dp[i] += dp[i - 2]
        }
    }
    return dp[s.length]
}

console.log(numDecodings('12')) // 2
console.log(numDecodings('226')) // 3
console.log(numDecodings('0')) // 0
console.log(numDecodings('1')) // 1
console.log(numDecodings('')) // 1
console.log(numDecodings('1212')) // 5
console.log(numDecodings('12121')) // 8
console.log(numDecodings('1210')) // 2
console.log(numDecodings('12120')) // 3