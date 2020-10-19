function bestTimeToSell(prices){
    let maxDiff = 0;
    let minPrice = prices[0]
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        } else{
            maxDiff = Math.max(maxDiff, prices[i] - minPrice)
        }
    }
    
    return maxDiff
}

const prices = [7, 1, 5, 3, 6, 4]

console.log(bestTimeToSell(prices))
