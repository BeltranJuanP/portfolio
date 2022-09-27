import React from 'react'
import Book from './ui/Book'
import { books } from '../data'

function Discounted() {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">

                        Discount <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                    {books.filter(book => book.salePrice).slice(0, 8).map(book => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Discounted