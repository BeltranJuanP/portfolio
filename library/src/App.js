import React from 'react'
import {useState, useEffect} from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data'
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([])
  const [numItems, setNumItems] = useState(0)

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1 }])
  }

  function changeQuantity(book, quantity) {
      setCart(cart.map(item => {
        if (parseInt(item.id) === parseInt(book.id)) {
          return {
            ...item,
            quantity: parseInt(quantity),
          }
        } else {
          return item
        }
      }))
  }

  function removeItem(item) {
    setCart(cart.filter(book => parseInt(book.id) !== parseInt(item.id)))
  }

  function getNumItems() {
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })
    setNumItems(counter)
  }

  useEffect(() => {
    getNumItems()
  }, [cart])

  return (
    <Router>
      <div className="App">
        <div className="AppContent">
          <Nav numItems={numItems}/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/books" element={<Books books={books} />} />
            <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
            <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
