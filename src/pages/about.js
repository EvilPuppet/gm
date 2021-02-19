import React from "react";
import Layout from '../components/layout';
import { Container } from "../css/about";
import Me from "../images/me.jpeg";
import { animated, useSpring } from 'react-spring';
import SEO from "../components/seo";

const AboutPage = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <>
      <Layout>
      <SEO title="About | Guilherme Motta | Software Enginner"/>
      <Container>
        <animated.h1 style={props} alt="titulo-about">ABOUT</animated.h1>
        <div>
            <animated.img  style={props} src={Me} className="avatar" alt="guilherme-foto" />
            <animated.p style={props} alt="sobre-min">
                Ola me chamo Guilherme sou de florianopolis SC, trabalho na area de TI a mais de 5 anos
                sou pos-graduado em engenharia de software ja trabalhei com diversas empresas como Tribunal Regional Eleitoral
                CRP e betha sistemas ajudando a construir software com milhares de acessos sempre pensando na qualidade e no compromentimento
                dos prazos, tenho certeza que sei a solucao para o seu negocio.
            </animated.p>
        </div>
        </Container>
      </Layout>
    </>
  );
};

export default AboutPage;
