import React from "react";
import { Container } from "../css/index";
import Layout from "../components/layout";
import SEO from '../components/seo';
import { animated,useSpring } from 'react-spring'
import SocialMedia from "../components/social";
import Me from "../images/me.jpeg";

const IndexPage = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <>
      <Layout>
        <SEO title="Home | Guilherme Motta | Software Enginner" />
        <Container className="content">
          <animated.img src={Me} className="avatar" alt="guilherme-foto" />
          <animated.h1 style={props} alt="guilherme-nome">Guilherme Motta</animated.h1>
          <animated.blockquote style={props} alt="guilherme-ditado">“Simples always better”</animated.blockquote>
              <SocialMedia />
        </Container>
      </Layout>
    </>
  );
}
 

export default IndexPage;
