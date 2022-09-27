import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import CartItem from '../components/ui/CartItem'
import EmptyCart from "../assets/empty_cart.svg"

function Cart({books, cart, changeQuantity, removeItem}) {

    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        let total = 0
        cart.forEach(element => {
            total += element.quantity * (element.salePrice || element.originalPrice)
        });
        setSubTotal(total)
    }, [cart])

    return (
        <div className="books__body">
            <main className="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__price">Price</span>
                            </div>
                            {cart.length > 0 
                            ?
                            <div className="cart__body">
                                {
                                    cart.map(book => {
                                        return <CartItem book={book} changeQuantity={changeQuantity} removeItem={removeItem} key={book.id}/>
                                    })
                                }
                            </div>
                            :
                            <div className="cart__empty">
                                <img src={EmptyCart} alt="" className="cart__empty--img" />
                                <h2>You don't have any books in your cart!</h2>
                                <Link to="/books">
                                    <button className="btn">Browse books</button>
                                </Link>
                            </div>
                            }
                        </div>
                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${subTotal.toFixed(2)}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${(subTotal * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${((subTotal * 0.1) + subTotal).toFixed(2)}</span>
                            </div>
                            <button className="btn btn__checkout" onClick={() => alert("not implemented")}>
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart