//headElement is a head element node
const headElement = document.head
console.log(headElement)
console.log(headElement.childNodes)
//return the children (all node types), NodeList data type
console.log(headElement.children)
//return child elements(only element type), HTMLCollection data type
const headChildNodes = headElement.childNodes
//NodeList is an array, can use all array functions
headChildNodes.forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})
console.log('----')
//HTMLCollection is an array-like (not real array),need to convert to array before using array functions
const headChildren = headElement.children
Array.from(headChildren).forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})