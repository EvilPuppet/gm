import React from "react";
import Navigation from "../components/navigation";
import Footer from '../components/footer';
import GlobalStyle from "../css/globalStyle";
import Card from '../components/card';
import { animated, useSpring } from 'react-spring';
import styled from "styled-components";

const H3 = styled(animated.h3)`
    text-align: center;
    color:#888888; 
    font-size: 2.125em; 
    margin-top: 20px;

    &:hover {
        color: #585858;
    }
`;

const Portfolio = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <H3 style={props}>PORTFOLIO</H3>
      <Card style={props} />
      <Footer />
    </>
  );
};

export default Portfolio;
