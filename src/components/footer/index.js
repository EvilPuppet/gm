import React from 'react';

import { Container } from './style';

function Footer() {
  return (
      <>
        <Container>
            <p>
            © {new Date().getFullYear()} Guilherme Motta - Todos os direitos reservados
            </p>
        </Container>
      </>
  )
}

export default Footer;