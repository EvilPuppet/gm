import React from "react";
import Navigation from "../navigation";
import Footer from "../footer";
import GlobalStyle from "../../css/globalStyle";

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      <Navigation />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default Layout;
