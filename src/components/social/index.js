import React from "react";
import {Container} from './style';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';

const SocialMedia = () => {
  return (
    <>
    <Container className="social">
      <div className="item">
        <a href="#" alt="github">
          <img src={github} />
        </a>
      </div>
      <div className="item">
        <a href="#" alt="linkedin">
          <img src={linkedin} />
        </a>
      </div>
      <div className="item">
        <a href="#" alt="twitter">
          <img src={twitter} />
        </a>
      </div>
    </Container>
    </>
  );
};

export default SocialMedia;
