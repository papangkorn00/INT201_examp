// 65130500041 Papangkorn Kijsakulrat
// import {createGuestList} from "./data/guestdata.js"
const createGuestList = require("./data/guestdata.js")

const guestList = createGuestList()

function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    document
      .getElementById("search-input")
      .addEventListener("keyup", searchGuest)
    document.getElementById("add-guest-btn").addEventListener("click", addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const displayArea = document.getElementById("display-area")
    const newDiv = document.createElement("div")
    const spanName = document.createElement("span")
    const spanRemove = document.createElement("span")

    spanName.textContent = guestItem.firstname + " " + guestItem.lastname

    spanRemove.setAttribute("class", "remove-icon")
    spanRemove.setAttribute(
      "id",
      `${guestItem.firstname}-${guestItem.lastname}`
    )
    spanRemove.textContent = "[X]"
    spanRemove.style = "cursor:pointer;color:red"

    spanRemove.addEventListener("click", removeGuest)

    displayArea.append(newDiv)
    newDiv.append(spanName, spanRemove)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const display = document.getElementById("display-area")
    Array.from(display.children).forEach((guest) => {
      guest.remove()
    })

    guestResult.forEach((guest) => {
      displayGuest(guest)
    })
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const searchInput = event.target.value
    displayGuests(guests.searchGuests(searchInput))
  }

  // 5. Function to add a new guest
  function addGuest() {
    let firstname = document.getElementById("firstname-input").value
    let lastname = document.getElementById("lastname-input").value
    guests.addNewGuest(firstname, lastname)
    displayGuest({firstname, lastname})
    firstname = ""
    lastname = ""
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    // const [firstname, lastname] = event.target.id.split("-");
    // guests.removeGuest({ firstname, lastname });
    // displayGuests(guests.getAllGuests());

    // const target = event.target.previousSibling.textContent
    // const arrName = target.split(" ")
    // console.log(target)
    // console.log(arrName)
    // guests.removeGuest({firstname: arrName[0], lastname: arrName[1]})
    // displayGuests(guests.getAllGuests())

    // myCode
    const target = event.target.id.split("-")
    console.log(target) // (2) ['firstname', 'lastname']
    guests.removeGuest({firstname: target[0], lastname: target[1]})
    displayGuests(guests.getAllGuests())
    
    
    
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest,
  }
}
module.exports = guestForm
// export {guestForm}
// const {registerEventHandling, displayGuests} = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())
