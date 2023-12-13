function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage){
    if(!allItems) return undefined
    if(allItems.length === 0) return []
    if(rowsPerPage <= 0) return allItems
    if(currentPage <= 0) return allItems

    const start = (currentPage -1)* rowsPerPage
    const end   = start + rowsPerPage
    return allItems.slice(start,end)
}

const allItems1 = [ ];
var currentPage1 = 2;
var rowsPerPage1 = 3;
console.log(getItemsOfCurrentPage(allItems1, currentPage1, rowsPerPage1)); // Output: ['item4', 'item5', 'item6']
