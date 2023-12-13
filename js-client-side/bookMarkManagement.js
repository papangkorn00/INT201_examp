class BookMark {
  constructor(isbn, totalPage = 0) {
    this.bookMarks = []
    this.totalPage = totalPage
    this.isbn = isbn
  }

  addBookMark(pageNumber) {
    if (pageNumber < 1 || pageNumber > this.totalPage)
      return this.bookMarks.length
    else this.bookMarks.push(pageNumber)
  }

  removeBookMark(pageNumber) {
    const indexRemove = this.bookMarks.findIndex((p) => p === pageNumber)
    if (indexRemove === -1) return undefined
    else {
      this.bookMarks.splice(indexRemove, 1)
      return pageNumber
    }
  }

  goToFirstBookMark() {
    return this.bookMarks ? this.bookMarks[0] : undefined
  }

  goToLastBookMark() {
    return this.bookMarks ? this.bookMarks.length - 1 : undefined
  }

  getBookMarks() {
    return this.bookMarks
  }
}
