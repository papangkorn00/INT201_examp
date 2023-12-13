class Book {
  constructor(isbn, title = "untitle", ebook = false) {
    this.isbn = isbn
    this.title = title
    this.ebook = ebook
    this.authors = []
  }

  addAuthor(fn, ln) {
    return this.authors.push({firstname: fn, lastname: ln})
  }

  getFirstAuthor() {
    return this.authors ? this.authors[0] : undefined
  }

  getCoAuthors() {
    return this.authors ? this.authors.splice(1, Infinity) : []
  }

  findAuthor(firstname, lastname) {
    return this.authors
      ? this.authors.find((name) => {
          name.firstname.toLowerCase() === firstname &&
            name.lastname.toLowerCase() === lastname
        })
      : undefined
  }

  hasEbook() {
    return this.ebook
  }
}
