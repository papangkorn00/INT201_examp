const library = [
    { title: "Book A", author: "Author X", publishedYear: 2010 },
    { title: "Book B", author: "Author Y", publishedYear: 2009 },
    { title: "Book C", author: "Author Z", publishedYear: 2015 },
  ];
  
  function findNewestBook(library) {
    let newestYear = 0;
    let newestTitle = "";
  
    library.forEach((book) => {
      if (book.publishedYear > newestYear) {
        newestYear = book.publishedYear;
        newestTitle = book.title;
      }
    });
  
    return newestTitle;
  }
  
  const newestBookTitle = findNewestBook(library);
  console.log(`The newest book in the library is: ${newestBookTitle}`);
  