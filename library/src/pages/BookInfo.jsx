import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link, useParams, useState} from 'react-router-dom'
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price'
import Book from '../components/ui/Book'

function BookInfo({books, addToCart, cart}) {
    const { id } = useParams()
    const book = books.find(book => parseInt(book.id) === parseInt(id))

    function bookExistsInCart() {
        const dupe = cart.find(book => parseInt(book.id) === parseInt(id))

        return dupe
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link className="book__link" to="/books">
                                <FontAwesomeIcon icon="arrow-left"/>
                            </Link>
                            <Link to="/books">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating}/>
                                <div className="book__selected--price">
                                    <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi libero enim sunt voluptatibus autem suscipit rerum. Ex dolore laborum nihil! Corporis doloribus consequuntur a quasi quos possimus officiis tempora amet.
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi libero enim sunt voluptatibus autem suscipit rerum. Ex dolore laborum nihil! Corporis doloribus consequuntur a quasi quos possimus officiis tempora amet.
                                    </p>
                                </div>
                                {bookExistsInCart() ? (
                                    <Link to="/cart">
                                        <button className="btn">Checkout</button>
                                    </Link>
                                ) : (
                                    <button className="btn" onClick={() => addToCart(book)}>Add to Cart</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="book__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                        {
                            books
                                .filter(book => book.rating === 5 && parseInt(book.id) !== parseInt(id))
                                .slice(0,4)
                                .map(book => <Book book={book} key={book.id}/>)
                        }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BookInfo