import React from 'react';
import Me from "../../images/me.jpeg";
import { Container } from './style';
import {useSpring, animated} from 'react-spring'

function About() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
      <>
        <Container style={props}>
        <h1>ABOUT</h1>
        <div>
            <img src={Me} className="avatar" alt="" />
            <p>
                Ola me chamo Guilherme sou de florianopolis SC, trabalho na area de TI a mais de 5 anos
                sou pos-graduado em engenharia de software ja trabalhei com diversas empresas como Tribunal Regional Eleitoral
                CRP e betha sistemas ajudando a construir software com milhares de acessos sempre pensando na qualidade e no compromentimento
                dos prazos, tenho certeza que sei a solucao para o seu negocio.
            </p>
        </div>
        </Container>
      </>
  );
}

export default About;