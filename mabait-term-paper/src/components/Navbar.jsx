import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import "../css/Navbar.css"


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-name">
            <h1>
              <a href="#header">
                <span>CMSC 124</span>{" "}
              </a>
            </h1>
          </div>
        </div>

        <div className={`nav-menu ${menuOpen ? "show-menu" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>

          <div className="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
