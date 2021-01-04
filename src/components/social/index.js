import React from "react";
import {Container} from './style';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';

const SocialMedia = () => {
  return (
    <>
    <Container className="social">
      <nav>
        <ul>
          <li>
            <a href="#" alt="github">
              <img src={github} />
            </a>
          </li>
          <li>
            <a href="#" alt="linkedin">
              <img src={linkedin} />
            </a>
          </li>
          <li>
            <a href="#" alt="twitter">
              <img src={twitter} />
            </a>
          </li>
        </ul>
      </nav>
    </Container>
    </>
  );
};

export default SocialMedia;
