import React from "react";
import { Link } from "gatsby";
import { Header } from "./style";

const NavMenu = () => {
  
  return (
    <>
      <Header>
        <Link to="/" className="logo">
          <p alt="Guilherme Motta">GM</p>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/about">SOBRE</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="#">BLOG</Link>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
};

export default NavMenu;
