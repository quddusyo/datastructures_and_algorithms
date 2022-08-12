// function to merge two sorted arrays in ascending order
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    // while i and j are less than the arrays length, push smaller value to results array and increment corresponding i or j value by 1
    while(i < arr1.length && j < arr2.length){
        if (arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    // while loop for when arr2 has been finished, push remaining arr1 elements to results arr
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++
    }
    // while loop for when arr1 has been finished, push remaining arr1 elements to results arr
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++
    }
    
    return results;
}

//console.log(merge([1,23],[3,45]))

function mergeSort(arr) {
    // base case
    if (arr.length <= 1) return arr;
    // slice array in half
    let mid = Math.floor(arr.length/2)
    // identify left and right arrays
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

//console.log(mergeSort([10,24,76, 73]));