import React, { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context";
import CartDetails from "./CartDetails";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const {cartData} = useContext(MovieContext);
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  

  function handleCartShow() {
    console.log(showCart, "clicked");

    setShowCart(true);
  }
  return (
    <header >
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between m-auto space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
            onClick={() => setDarkMode(darkMode =>!darkMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ darkMode ?  sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={handleCartShow}
              className="bg-primary/20 relative dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={shoppingCart} width="24" height="24" alt="" />

              {
                cartData.length > 0 && <span className=" rounded-full absolute top-[-12px] left-[28px] bg-[#12cf6f] text-white text-center p-[2px] w-[30px] h-[30px] " >{cartData.length}</span>
              } 
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
