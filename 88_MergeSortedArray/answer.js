function mergeSortedArray(nums1, m, nums2, n){
    let index = nums1.length - 1
    m--;
    n--;
    while(index >= 0){
        if(m < 0){
            nums1[index] = nums2[n]
            n--
        } else if(n < 0){
            nums1[index] = nums1[m]
            m--
        } else {
            if(nums2[n] >= nums1[m]){
                nums1[index] = nums2[n]
                n--;
            } else {
                nums1[index] = nums1[m]
                m--;
            }
        }
        index--;
    }

    return nums1
}

console.log(mergeSortedArray([1,2,3,0,0,0], 3, [2, 5, 6], 3))

/**
 * Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
 */