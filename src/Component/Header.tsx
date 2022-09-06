import { FaHandshake } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

import "./Component.scss";

export default function Header() {
  return (
    <>
    {/* Header for Homepage */}
      <div className="header">
        <img
          className="depo-logo"
          src="https://cdn.shopify.com/s/files/1/0566/3182/0333/files/LOGO-color.png?v=1649858964"
          alt=""
        />

        <div className="select-location">Select Location</div>

        <input
          type="text"
          className="search-bar-for-pc"
          placeholder="Search for Products like Hinges, Mortise, etc"
        ></input>

        <div className="be-our-partner">
          Be Our Partner
          <FaHandshake className="handshake-icon" />
        </div>

        <div className="login-and-cart">
          <CgProfile className="icon" />
          <div>Login</div>
        </div>

        <div className="login-and-cart">
          <HiOutlineShoppingCart className="icon" />
          <div>Cart</div>
        </div>
        <div className="location">
          <GoLocation className="icon"/>
        </div>
      </div>
      <div className="p-2">
        <input
          type="text"
          className="search-bar-for-mobile"
          placeholder="Search for Products like Hinges, Mortise, etc"
        ></input>
      </div>
    </>
  );
}
