import React from "react";
import Logo from "../components/logo";
import Navigation from "../components/navigation";
import Footer from '../components/footer';
import GlobalStyle from "../css/globalStyle";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Logo />
      <Footer />
    </>
  );
};

export default IndexPage;
