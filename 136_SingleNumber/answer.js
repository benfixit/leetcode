function singleNumber(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result ^= arr[i]
    }

    return result;
}

console.log(singleNumber([2, 3, 5, 5, 4, 4, 2]))