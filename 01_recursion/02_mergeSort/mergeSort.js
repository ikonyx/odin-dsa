export function mergeSort(array) {
    const isSorted = arr =>
    arr.every((val, i, array) => i === 0 || array[i - 1] <= val);

    if (array.length <= 1 || isSorted(array)) return array;


    const midElement = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, midElement);
    const rightHalf = array.slice(midElement);

    const left = mergeSort(leftHalf);
    const right = mergeSort(rightHalf);
    
    const sortedArray = merge(left, right);

    return sortedArray;
}


function merge(array1, array2) {

  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;


  if (array1[0] <= array2[0]) {
    return [array1[0], ...merge(array1.slice(1), array2)];
  } else {
    return [array2[0], ...merge(array1, array2.slice(1))];
  }
}


// merge function with iterative method:

// export function merge(array1, array2) {
//     let mergedArray = [];
//     let i = 0;
//     let j= 0;
//     while (i < array1.length && j < array2.length) {
//         if (array1[i] <= array2[j]) {
//             mergedArray.push(array1[i]);
//             i++;
//         } else {
//             mergedArray.push(array2[j]);
//             j++;
//         }
//     }
            
//     for (;i < array1.length; i++) {
//         mergedArray.push(array1[i]);
//     }   
//     for (;j < array2.length; j++) {
//         mergedArray.push(array2[j]);
//     }   

//     return mergedArray;
// }