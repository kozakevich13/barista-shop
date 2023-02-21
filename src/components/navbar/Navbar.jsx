import React, { useState } from "react";
import Logo from "../logo/Logo";
import Button from "./Button";
import menuItems from "./MenuItems";
import "./Navbar.css";
import icon_telegram from "../../img/telegram.png"
import icon_instagram from "../../img/instagram.png"
import icon_facebook from "../../img/facebook.png"


const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <Logo/>
        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="menu-icon" onClick={handleClick}>
                <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
                <button className="order">Замовити</button>
              </div>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
        <div className="social-links">
          <img className="links-icons" src={icon_facebook}/>
          <img className="links-icons" src={icon_instagram}/>
          <img className="links-icons" src={icon_telegram}/>
        </div>

      </ul>
    </nav>
  );
};

export default Navbar;
