import React from "react";
import Navigation from "../components/navigation";
import SocialMedia from "../components/social";
import GlobalStyle from "../css/globalStyle";
import Me from "../images/me.jpeg";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <picture>
        <source
          media="(max-width: 200px)"
          srcset={Me}
          className="avatar"
          alt=""
        />
        <img src={Me} className="avatar" alt="" />
      </picture>
      <SocialMedia />
    </>
  );
};

export default IndexPage;
