import React from "react";
import { Header } from "./style";

const Navigation = () => {
  return (
    <>
      <Header>
        <a href="#" className="logo">
          <img src="" alt="Guilherme Motto logo"></img>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">SOBRE</a>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
};

export default Navigation;
