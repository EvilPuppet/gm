import React from "react";
import { Link } from "gatsby";
import Navigation from "../navigation";
import Footer from "../footer";
import About from "../about";
import GlobalStyle from "../../css/globalStyle";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  console.log("children:", children);

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
