
import Banner from './Banner'
import Cart from './Cart'
import logo from '../assets/logo.png'
import ShoppingList from './ShoppingList'
import Footer from './footer'
import { useState } from 'react'



export default function App() {
  const [cart, updateCart]=useState([])
return <>
  <Banner>
    <img src={logo} alt="la maison de la jungle" className="lmj-logo"/>
    <h1>La maison de la jungle</h1>
  </Banner>
  <div className='block'>
    <Cart cart={cart} updateCart={updateCart} /> 
    <ShoppingList cart={cart} updateCart={updateCart} />
  </div>

  <Footer/>
</> 
}
