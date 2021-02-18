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
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
};

export default NavMenu;
