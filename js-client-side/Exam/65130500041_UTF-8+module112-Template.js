//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500041       Name: Papangkorn Kijsakulrat

class Order {
  constructor(orderId, customerName) {
    this.orderId = orderId
    this.customerName = customerName
    this.items = []
  }

  addItem(item) {
    if (
      item.name !== null ||
      item.price !== null ||
      item.quantity !== null ||
      item.name !== undefined ||
      item.price !== undefined ||
      item.quantity !== undefined ||
      (item.name !== "" && item.price > 0 && item.price > 0)
    ) {
      this.items.push(item)
      return {name: item.name, price: item.price, quantity: item.quantity}
    } else return -1
  }

  removeItem(itemName) {
    const removeItem = this.items.findIndex((name) => {
      return name.name === itemName
    })
    this.items.splice(removeItem, 1)
    return
  }

  calculateTotal() {
    const totalPrice = this.items.reduce((a, b) => {
      a.name += b.price * b.quantity
    }, 0)
    return totalPrice
  }

  getDiscountedTotal(discountPercentage) {
    // ไม่ทันครับ
  }

  findItemByName(itemName) {
    const findName = this.items.find((name) => {
      return (name.name = itemName)
    })
    if (!findName) return null
    return findName
  }

  sortItemsByPrice(sortingOrder) {
    // ไม่ทันครับ
  }

  isItem(Item) {
    if (
      (Item.name !== null && Item.price !== null && Item.quantity !== null) ||
      (Item.name !== undefined &&
        Item.price !== undefined &&
        Item.quantity !== undefined) ||
      (Item.name !== "" && Item.price > 0 && Item.price > 0)
    )
      return true
    return false
  }
}

let myOrder = new Order(1, "John Wick")

console.log(
  "add item----------------------------------------------------------------"
)
//add item
console.log(myOrder.addItem({name: "Laptop", price: 1000, quantity: 1})) // Adds Laptop and return this item
console.log(myOrder.addItem({name: "Keyboard", price: 100, quantity: 2})) // Adds Keyboard and return this item
console.log(myOrder.addItem({name: "Mouse", price: 25, quantity: 3})) // Adds Mouse and return this item
console.log(myOrder.addItem({name: "", price: 100, quantity: 1})) // Empty name, should not add and return -1
console.log(myOrder.addItem({name: "Headphones", price: -50, quantity: 1})) // Negative price, should not add and return -1

// console.log(
//   "remove item----------------------------------------------------------------"
// )
// //remove item
// myOrder.removeItem("Laptop") // Removes Laptop if it exists
// console.log(myOrder.items)

// myOrder.removeItem("Keyboard") // Removes Keyboard if it exists
// console.log(myOrder.items)

// myOrder.removeItem("NonExistentItem") // Tries to remove a non-existent item
// console.log(myOrder.items)

// myOrder.removeItem("") // Tries to remove an item with an empty name
// console.log(myOrder.items)

// myOrder.removeItem("Mouse") // Removes Mouse if it exists
// console.log(myOrder.items)

console.log(
  "calculateTotal----------------------------------------------------------------"
)
//calculateTotal
console.log(myOrder.calculateTotal())

// console.log(
//   "getDiscountedTotal----------------------------------------------------------------"
// );
// //getDiscountedTotal
// console.log(myOrder.getDiscountedTotal(10)); // Applies 10% discount if total price is 100 will return 90
// console.log(myOrder.getDiscountedTotal(0)); // No discount applied (0%) return “invalid discount percentage”
// console.log(myOrder.getDiscountedTotal(100)); // Applies 100% discount if total price is 100 will return 0
// console.log(myOrder.getDiscountedTotal(-10)); // Negative discount percentage, should not apply return “invalid discount percentage”

console.log(
  "findItemByName----------------------------------------------------------------"
)
//findItemByName
console.log(myOrder.findItemByName("Laptop")) // Finds Laptop if it exists
console.log(myOrder.findItemByName("Keyboard")) // Finds Keyboard if it exists
console.log(myOrder.findItemByName("NonExistentItem")) // Tries to find a non-existent item return null
console.log(myOrder.findItemByName("")) // Tries to find an item with an empty name return null

// console.log(
//   "sortItemsByPrice----------------------------------------------------------------"
// );
// //sortItemsByPrice

// console.log(myOrder.sortItemsByPrice("ascending")); // return new array with ascending
// console.log(myOrder.sortItemsByPrice("descending")); // return new array with descending
// console.log(myOrder.sortItemsByPrice("nonexistentOrder")); // return empty array if invalid sorting order
// myOrder.items = [];
// console.log(myOrder.sortItemsByPrice("ascending")); // return empty array if items array is empty

// console.log(
//   "isItem----------------------------------------------------------------"
// )
// //isItem
// console.log(myOrder.isItem({name: "Pen", price: 3, quantity: 10})) // valid item return true
// console.log(myOrder.isItem({name: "Paper", price: 5, quantity: 20})) // valid item return true
// // console.log(myOrder.isItem(null)); // valid item return false
// // console.log(myOrder.isItem(undefined)); // valid item return false
// console.log(myOrder.isItem({price: 20, quantity: 1})) // missing name return false
// console.log(myOrder.isItem({name: "Notebook", price: -10, quantity: 5})) // negative price return false
// console.log(myOrder.isItem({name: "Notebook", price: 10, quantity: -5})) // negative quantity return false
// console.log(myOrder.isItem({name: "", price: 15, quantity: 5})) // empty name return false
