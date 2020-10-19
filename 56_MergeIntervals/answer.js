function mergeIntervals(intervals){
    if(intervals.length <= 1){
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])
    
    
    const lastIndex = intervals.length - 1, result = [];

    let index = 0;
        
    for(let i = 0; i <= lastIndex; i++){
        if(!result.length || result[index - 1][1] < intervals[i][0]){
          result.push(intervals[i])
          index++
        } else {
          result[index - 1][1] = Math.max(result[index - 1][1], intervals[i][1])
        }
    }
    
    return result
}

const intervals1 = [[2,3],[4,5],[6,7],[8,9],[1,10]]

console.log(mergeIntervals(intervals1))