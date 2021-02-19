import React from "react";
import Card from '../components/card';
import { animated, useSpring } from 'react-spring';
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
      <Layout>
      <SEO title="Portfolio | Guilherme Motta | Software Enginner" />
      <H3 style={props} alt="titulo-porfolio">PORTFOLIO</H3>
      <Card style={props} />
      </Layout>
    </>
  );
};

export default Portfolio;
