import React from 'react'
import "../css/Footer.css"

const socialLinks = [
  {
    id: 1,
    href: "#",

    class: "fa-solid fa-phone",
  },
  {
    id: 2,
    href: "#",

    class: "fa-solid fa-envelope",
  },
];




const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-icons">
        {socialLinks.map((icon) => {
          return (
            <li key={icon.id}>
              <a href={icon.href}  className="footer-icon">
                <i className={icon.class}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="copyright">
        Copyright &copy; Rian Luis Mabait
        <span id="date">{new Date().getFullYear()} </span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer
