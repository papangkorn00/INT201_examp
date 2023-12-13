function concatArray(array1, array2) {
  if (array1?.length === 0 && array2?.length === 0) return []
  if (
    array1 === null &&
    array2 === null &&
    array1 === undefined &&
    array2 === undefined
  )
    return undefined

  if (
    array1?.length === 0 ||
    array2?.length === 0 ||
    array1 === null ||
    array2 === null ||
    array1 === undefined ||
    array2 === undefined
  )return ;
    
    return array1.concat(array2)
}

const arr1 = undefined
const arr2 = [1,2,3,4]

const result = concatArray(arr1, arr2)
console.log(result)
