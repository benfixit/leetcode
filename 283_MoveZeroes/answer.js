function moveZeroes(arr){
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[index++] = arr[i]
        }
    }

    for(let i = index; i < arr.length; i++){
        arr[i] = 0
    }

    return arr
}

function moveZeroesToLeft(arr){
    let len = arr.length
    let index = len - 1;
    for(let i = index; i >= 0; i--){
        if(arr[i] !== 0){
            arr[index--] = arr[i]
        }
    }

    for(let i = index; i >= 0; i--){
        arr[i] = 0;
    }

    return arr
}

const arr1 = [0,1,0,3,12]
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const arr3 = [1, 10, 20, 0, 59, 63, 0, 88, 0]

// console.log(moveZeroes(arr1))
console.log(moveZeroesToLeft(arr2))
console.log(moveZeroesToLeft(arr3))