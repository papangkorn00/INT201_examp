// 65130500041, Papangkorn Kijsakulrat

class Movies {
  constructor() {
    this.movies = []
  }

  getAllMovies() {
    return this.movies
  }

  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) return undefined

    const duplicate = this.movies.some((movie) => {
      return (
        movie.title.toLowerCase() === title &&
        movie.director.toLowerCase() === director
      )
    })
    if (duplicate) return undefined
    this.movies.push({title, director, year, genre})
    return {title, director, year, genre}
  }

  updateMovie(title, updateDetails) {
    const updateMovie = this.movies.find((movie) => {
      return movie.title.toLowerCase() === title.toLowerCase()
    })
    if (!updateMovie) return undefined
    if (updateDetails.director !== undefined) {
      updateMovie.director = updateDetails.director
    }
    if (updateDetails.year !== undefined) {
      updateMovie.year = updateDetails.year
    }
    if (updateDetails.genre !== undefined) {
      updateMovie.genre = updateDetails.genre
    }
    return updateMovie
  }

  deleteMovieByTitle(title) {
    // // my code
    // const deleteMovie = this.movies.find((movie) => {
    //   return movie.title.toLowerCase() === title.toLowerCase()
    // })
    // if (!deleteMovie) return "no movie has been deleted"
    // this.movies.splice(deleteMovie, 1)
    // return `a movie object ${deleteMovie} is deleted`

    const indexMovie = this.movies.findIndex((movie) => {
      return movie.title.toLowerCase() === title.toLowerCase()
    })
    if (indexMovie === -1) {
      return "no movie has been deleted"
    }
    const movie = this.movies[indexMovie]
    this.movies.splice(indexMovie, 1)
    return `a movie object ${movie} is deleted`
  }
}

module.exports = Movies

// const movies = new Movies()
// movies.addMovie("Inception", "Christopher Nolan", 2010, "Science Fiction")
// movies.addMovie("Pulp Fiction", "Quentin Tarantino", 1994, "Crime")
// console.log(movies.getAllMovies())
// movies.updateMovie("Inception", {genre: "Action"})
// console.log(movies.deleteMovieByTitle("pulp fiction"))
// console.log(movies.getAllmovies())
