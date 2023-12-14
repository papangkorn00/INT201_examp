document.addEventListener("DOMContentLoaded", () => {
  const movies = JSON.parse(localStorage.getItem("movies")) || []
})

function addMovie() {
  const movieName = document.getElementById("movieName").value
  const releaseYear = document.getElementById("releaseYear").value

  if (movieName && releaseYear) {
    const movie = {name: movieName, year: releaseYear}
    const movies = JSON.parse(localStorage.getItem("movies")) || []

    movies.push(movie)
    localStorage.setItem("movies", JSON.stringify(movies))

    displayMovies(movies)
    document.getElementById("movieName").value = ""
    document.getElementById("releaseYear").value = ""
  }
}

function removeMovie(movie) {
    const movies = JSON.parse(localStorage.getItem("movies")) || []
    const index = movies.findIndex(movie)
  
    if (index === -1) {
      movies.splice(index, 1)
      localStorage.setItem("movies", JSON.stringify(movies))
      displayMovies(movies)
    }
  }

function editMovie(movie) {
    const movies = JSON.parse(localStorage.getItem("movies")) || []
    const index = movies.findIndex(movie)
  
    if (index === -1) {
      let updateName = prompt("Enter Movie name to Update", movies[index].name)
      let updateYear = prompt("Enter released year to Update", movies[index].year)
  
      if (updateName !== null && updateYear !== null) {
        movies[index] = {name: updateName, year: updateYear}
        localStorage.setItem("movies", JSON.stringify(movies))
        displayMovies(movies)
      }
    }
  }


function searchMovie() {
  const searchInput = document.getElementById("search").value

  const movies = JSON.parse(localStorage.getItem("movies")) || []
  const filterMovies = movies.filter((m) => {
    m.name.toLowerCase().includes(searchInput)
  })
  displayMovies(filterMovies)
}

function displayMovies(movies) {
  const movieList = document.getElementById("movieList")
  movieList.textContent = ""

  movies.forEach((m) => {
    const li = document.createElement("li")

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remove"
    removeBtn.addEventListener("click", removeMovie)

    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", editMovie)

    li.innerHTML = `${m.name} ${m.year}`
    movieList.append(li, removeBtn, editBtn)
  })
}
