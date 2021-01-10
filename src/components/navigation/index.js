import React, { useState, useEffect } from "react";
import NavMenu from '../navMenu';
import HamburgerMenu from '../hamburgerMenu';

const Navigation = () => {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function isHamburgueMenu() {
    return windowSize.width <= '500';
  }
  
  return (
    <>
    { isHamburgueMenu() ? <HamburgerMenu open={open} setOpen={setOpen} /> :
      <NavMenu />
    }
    </>
  );
};

export default Navigation;
