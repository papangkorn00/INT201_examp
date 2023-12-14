//Node.js
// const { template } = require('@babel/core')
// const products = require('./data/products.js')

//Browser
import {products} from "./data/products.js"

function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    document.querySelector('input').addEventListener('input', filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = (event) => {
    const inputValue = event.target.value.toLowerCase()
    const filterItems = items.filter((p) => 
      p.keywords.includes(inputValue))
    showItems(filterItems)
  }

  const showItems = (items) => {
    const ul = document.getElementById("items")
    ul.textContent = ""
    items.forEach((p) => {
      const li = document.createElement("li")
      li.textContent = `ID:${p.id}, 
      NAME:${p.name}, 
      KEYWORDS:${p.keywords}`
      ul.append(li)
    })
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems,
  }
}

// Node.js
// module.exports = itemList

//Browser
export {itemList}

const {initialPage, filterItemsHandler, showItems} = itemList(products)
initialPage()
