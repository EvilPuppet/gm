import React from "react";
import SocialMedia from "../social";
import { Container } from "./style";
import Me from "../../images/me.jpeg";
import {useSpring, animated} from 'react-spring'

const Logo = () => {
	const props = useSpring({opacity: 1, from: {opacity: 0}})
    return (
		<>
			<Container style={props} className="content">
				<animated.img style={props} src={Me} className="avatar" alt="" />
				<animated.h1 style={props}>Guilherme Motta</animated.h1>
				<animated.blockquote style={props}>“Simples always better”</animated.blockquote>
      			<SocialMedia />
			</Container>
		</>
    );
};

export default Logo;
