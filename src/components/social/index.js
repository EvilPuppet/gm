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
        <a href="https://github.com/guilhermefmotta" alt="github-link">
          <img src={github} alt="github" />
        </a>
      </div>
      <div className="item">
        <a href="https://www.linkedin.com/in/guilherme-motta-31a964142/" alt="linkedin-link">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div className="item">
        <a href="https://twitter.com/Guilher59366957" alt="twitter-link">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
    </Container>
    </>
  );
};

export default SocialMedia;
