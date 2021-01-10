import React from 'react';
import { Link } from 'gatsby';

import { Header, StyledBurger, StyledMenu } from './style';

function HamburgerMenu({ open, setOpen}) {
  return (
      <>
      <Header>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
        </StyledBurger>
        <StyledMenu open={open}>
        <div className="contentNav">
            <Link to="/">
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
        </div>
    </StyledMenu>
      </Header>
      </>
  );
}

export default HamburgerMenu;