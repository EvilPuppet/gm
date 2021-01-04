import React from "react";
import SocialMedia from "../social";
import { Container } from "./style";
import Me from "../../images/me.jpeg";

const Logo = () => {
    return (
		<>
			<Container className="content">
				<img src={Me} className="avatar" alt="" />
				<h1>Guilherme Motta</h1>
      	<SocialMedia />
			</Container>
			</>
    );
};

export default Logo;
