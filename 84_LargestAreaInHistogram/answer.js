function largestAreaInHistogram(heights){
    if(heights === null || heights.length === 0){
        return 0
    }
    const stack = [];
    let max = 0;
    stack.push(0);
    for(let i = 1; i < heights.length; i++){
        let current = heights[i]
        let lastItemInStack = heights[stack[stack.length - 1]]

        if(current >= lastItemInStack){
            stack.push(i)
        } else {
            while(stack.length !== 0 && current < lastItemInStack){
                let temp = heights[stack.pop()];
                if(stack.length === 0){
                    max = Math.max(max, (temp * i))
                } else {
                    max = Math.max(max, (temp * (i - stack[stack.length - 1] - 1)))
                }
            }
            stack.push(i)
        }
    }

    if(stack.length !== 0){
        let i = heights.length
        while(stack.length !== 0){
            let temp = heights[stack.pop()];
            if(stack.length === 0){
                max = Math.max(max, (temp * i))
            } else {
                max = Math.max(max, (temp * (i - stack[stack.length - 1] - 1)))
            }
        }
    }


    return max;
}

const heights = [2,1,5,6,2,3];
const heights2 = [2, 3, 4]

console.log(largestAreaInHistogram(heights))
console.log(largestAreaInHistogram(heights2))