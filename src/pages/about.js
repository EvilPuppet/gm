import React from "react";
import Navigation from "../components/navigation";
import Footer from '../components/footer';
import About from '../components/about';
import GlobalStyle from "../css/globalStyle";

const AboutPage = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
