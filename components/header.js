import React from "react";
import Menu from "public/images/icon-menu.svg";
import MenuClose from "public/images/icon-menu-close.svg";
import Image from "next/image";

function header() {
  return (
    <div className="header">
      <div>
        <img src="../images/logo.svg" alt="logo" />
      </div>
      <nav className="nav">
        <div id="menu" className="links">
          <button
            className="close-icon"
            onClick={() => {
              const menu = document.getElementById("menu");
              menu.classList.remove("open");
            }}
          >
            <Image src={MenuClose} alt='menu-icon-close' />
          </button>
          <div className="links-mob">
            <a>HOME</a>
            <a>NEWS</a>
            <a>POPULAR</a>
            <a>TRENDING</a>
            <a>CATEGORIES</a>
          </div>
        </div>
        <button
          onClick={() => {
            const menu = document.getElementById("menu");
            menu.classList.add("open");
          }}
        >
          <Image className="menu-icon" src={Menu} alt='menu-icon'/>
        </button>
      </nav>
    </div>
  );
}

export default header;
