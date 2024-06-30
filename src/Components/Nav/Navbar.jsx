import React, { useRef } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt=""></img>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      {/* navlinks */}
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="Anchor-link" href="#home">
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="Anchor-link" href="#about">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="Anchor-link" href="#projects">
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="Anchor-link" href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
