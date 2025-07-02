import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [menu,setMenu]= useState("shop"); //Yahan par useState isliye use kiya jisse ki agar koi banda shop pe click kare to shop 
    //shop pe aa jaye .aur men pe click kare to underline men pe aa jaye . 
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>VAISHNAVI</p>
        </div>
       <ul className="nav-menu">
    <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link>{menu === "shop" ? <hr/> :<></> }</li>
    <li onClick={() => {setMenu("mens")}}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
    <li onClick={() => {setMenu("womens")}}><Link to='/women'>Women</Link>{menu === "womens" ? <hr/> : <></>}</li>
    <li onClick={() => {setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
</ul>
        <div className="nav-login-cart">
            <Link to='/signup'><button>Login</button></Link>
            <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div> 
        </div>
        </div>
  )
}
