function totalPage(arrayItems, rowsPerPage) {

  if (arrayItems === null || arrayItems === undefined) return undefined
  if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0)
    return 1

  return Math.ceil(arrayItems.length / rowsPerPage)
}


const item = [1,2,3,4,5,6]
const row = 2

const result = totalPage(item,row)
console.log(result);