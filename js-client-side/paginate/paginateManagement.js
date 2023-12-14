// npm test CommonJS
// const { template } = require('@babel/core')
// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

// browser ES module
import {getItemsOfCurrentPage, getTotalPages} from "./lib/paginate.js"
import {products} from "./data/products.js"

function paginateManagement(items, rows) {
  const products = items
  const rowsPerPage = rows

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const ItemsCurrentPage = getItemsOfCurrentPage(
      products,
      currentPageNumber,
      rowsPerPage
    )
    const ul = document.getElementById("products")
    ItemsCurrentPage.forEach((item) => {
      const li = document.createElement("li")
      li.textContent = `ID:${item.id}, NAME:${item.name}`
      ul.append(li)
    })
  }

  const pageHandler = (event) => {
    const ulProducts = document.getElementById("products")
    // ulProducts.textContent = "" // easy way
    Array.from(ulProducts.children).forEach((item) => {
      item.remove()
    })

    const BtnStyle = document.querySelectorAll("button")
    BtnStyle.forEach((p) => (p.style = "border: 1px solid #999"))

    const current = event?.target.id || 1
    showItemsOfCurrentPage(current)
    const targetBtn = document.getElementById(current)
    targetBtn.style.backgroundColor = "LightSteelBlue"
    // cannot access to 'current' Button directly
  }

  const showPageNumbers = () => {
    const totalPage = getTotalPages(products, rowsPerPage)

    const showNumber = document.querySelector(".pagination")

    for (let page = 1; page <= totalPage; page++) {
      const numBtn = document.createElement("button")
      numBtn.textContent = page
      numBtn.setAttribute("id", page)
      numBtn.addEventListener("click", pageHandler)
      showNumber.append(numBtn)
    }
  }

  return {
    showPageNumbers,
    pageHandler,
  }
}

// npm test CommonJS
// module.exports = paginateManagement

// browser ES module
export {paginateManagement}
const {showPageNumbers, pageHandler} = paginateManagement(products, 10)
showPageNumbers()
pageHandler()
