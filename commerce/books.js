/**
 * This function simulates an api call
 * @returns books
 */
function getBooks() {
    return [
      {
        id: 1,
        title: "Crack the Coding Interview",
        url: "assets/crack the coding interview.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 2,
        title: "Atomic Habits",
        url: "assets/atomic habits.jpg",
        originalPrice: 39,
        salePrice: null,
        rating: 5,
      },
      {
        id: 3,
        title: "Deep Work",
        url: "assets/deep work.jpeg",
        originalPrice: 29,
        salePrice: 12,
        rating: 5,
      },
      {
        id: 4,
        title: "The 10X Rule",
        url: "assets/book-1.jpeg",
        originalPrice: 44,
        salePrice: 19,
        rating: 4.5,
      },
      {
        id: 5,
        title: "Be Obsessed Or Be Average",
        url: "assets/book-2.jpeg",
        originalPrice: 32,
        salePrice: 17,
        rating: 4,
      },
      {
        id: 6,
        title: "Rich Dad Poor Dad",
        url: "assets/book-3.jpeg",
        originalPrice: 70,
        salePrice: 12.5,
        rating: 5,
      },
      {
        id: 7,
        title: "Cashflow Quadrant",
        url: "assets/book-4.jpeg",
        originalPrice: 11,
        salePrice: 10,
        rating: 4,
      },
      {
        id: 8,
        title: "48 Laws of Power",
        url: "assets/book-5.jpeg",
        originalPrice: 38,
        salePrice: 17.95,
        rating: 4.5,
      },
      {
        id: 9,
        title: "The 5 Second Rule",
        url: "assets/book-6.jpeg",
        originalPrice: 35,
        salePrice: null,
        rating: 4,
      },
      {
        id: 10,
        title: "Your Next Five Moves",
        url: "assets/book-7.jpg",
        originalPrice: 40,
        salePrice: null,
        rating: 4,
      },
      {
        id: 11,
        title: "Mastery",
        url: "assets/book-8.jpeg",
        originalPrice: 30,
        salePrice: null,
        rating: 4.5,
      },
    ];
}

/**
 * This function renders books in the library
 * @param {*} books the books to render
 */
function renderBooks(books) {
    const booksWrapper = document.querySelector(".books")
    booksWrapper.textContent = ''

    // booksWrapper.innerHTML = 
    // `
    // <div class="book">
    //     <figure class="book_img_wrapper">
    //         <img class="book_img" src="assets/atomic habits.jpg" alt="">
    //     </figure>
    //     <div class="book_title">
    //         Atomic Habits
    //     </div>
    //     <div class="book_ratings">
    //         <i class="fas fa-star"></i>
    //         <i class="fas fa-star"></i>
    //         <i class="fas fa-star"></i>
    //         <i class="fas fa-star"></i>
    //         <i class="fas fa-star-half-alt"></i>
    //     </div>
    //     <div class="book_price">
    //      <span class="book_price_normal">$59.95</span> $14.95
    //     </div>
    // </div>
    // `

    for (let i = 0; i < books.length; i++) {
        const book = document.createElement("div")
        book.className = "book"

        //creates the figure
        const figure = document.createElement("figure")
        figure.className = "book_img_wrapper"

        const img = document.createElement("img")
        img.src = books[i].url
        img.className = "book_img"

        figure.appendChild(img)
        book.appendChild(figure)

         // creates the title
        const title = document.createElement("div")
        title.className = "book_title"
        title.textContent = books[i].title
        book.appendChild(title)

        // creates the ratings
        const ratings = document.createElement("div")
        ratings.className = "book_ratings"

        const quotient = Math.floor(books[i].rating / 1);
        
        let rating = 0
        while (rating < quotient) {
            const fullStar = document.createElement("i")
            fullStar.className = "fas fa-star"

            ratings.appendChild(fullStar)
            rating += 1
        }

        if (rating < books[i].rating) {
            const halfStar = document.createElement("i")
            halfStar.className = "fas fa-star-half-alt"

            ratings.appendChild(halfStar)

            rating += 1
        }

        book.appendChild(ratings)

        // creates the price
        const price = document.createElement("div")
        price.classList = "book_price book_price_gen"

        if (books[i].salePrice != null) {
            const normal_price = document.createElement("span")
            normal_price.className = "book_price_normal"

            normal_price.textContent = "$" + books[i].originalPrice

            price.appendChild(normal_price)

            const sale_price = document.createElement("p")
            sale_price.textContent = "$" + books[i].salePrice

            price.appendChild(sale_price)
        } else {
            price.textContent = "$" + books[i].originalPrice
        }

        book.appendChild(price)

        booksWrapper.appendChild(book)
    }

}

/**
 * Compares two book prices, low->high
 * @param {*} a book_one
 * @param {*} b book_two
 * @returns 
 */
function compareBookPrices(a, b) {
    let price_one = a.originalPrice
    let price_two = b.originalPrice

    if (a.salePrice != null) {
        price_one = a.salePrice
    }

    if (b.salePrice != null) {
        price_two = b.salePrice
    }


    if ( price_one < price_two ){
      return -1;
    }
    if ( price_one > price_two ){
      return 1;
    }
    return 0;
}

/**
 * compares two book ratings, high->low
 * @param {*} a book_one
 * @param {*} b book_two
 * @returns 
 */
function compareRatings(a, b) {
    if ( a.rating > b.rating ){
        return -1;
      }
      if ( a.rating < b.rating ){
        return 1;
      }
      return 0;
}

/**
 * Filters books based on user selection
 * @param {*} event 
 */
function filterBooks(event) {
    const sort = event.target.value

    if (sort == "LOW_TO_HIGH") {
        books = getBooks()
        books.sort(compareBookPrices)
        renderBooks(books)
    }
    if (sort == "HIGH_TO_LOW") {
        books = getBooks()
        books.sort(compareBookPrices)
        books.reverse()
        renderBooks(books)
    }
    if (sort == "RATING") {
        books = getBooks()
        books.sort(compareRatings)
        renderBooks(books)
    }

}

/**
 * Renders books on the page the first time it loads
 */
setTimeout(() => {
    renderBooks(getBooks());
});
