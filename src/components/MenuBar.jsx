import React from 'react'
import "../assets/css/MenuBar.css"
import { useEffect, useState } from 'react';

const menuItems = [
  { name: "About", href: "#About" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" }
];


function MenuBar() {

   const [active, setActive] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.href.replace("#", "")));
      const scrollPos = window.scrollY + 80; // Ajusta el offset según tu menú

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(menuItems[i].href.replace("#", ""));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
     <div className='menu_bar'>
      <ul>
        {menuItems.map(item => (
          <li key={item.name}>
            <a
              href={item.href}
              className={active === item.href.replace("#", "") ? "active" : ""}
              onClick={() => setActive(item.href.replace("#", ""))}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuBar