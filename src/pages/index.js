import React from "react";
import Navigation from "../components/navigation";
import Logo from "../components/logo";
import GlobalStyle from "../css/globalStyle";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Logo />
    </>
  );
};

export default IndexPage;
