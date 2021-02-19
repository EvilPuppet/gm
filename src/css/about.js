import styled from 'styled-components';
import { animated } from 'react-spring'

export const Container = styled(animated.div)`    
    max-width: 900px;
    margin: 0 auto;
    align-self: center;
    padding: 30px;
    display: grid;
    grid-template-columns: auto;
    text-align:center;
    gap: 15px;
    justify-content: center;

    h1 {
        color: #888888;
        font-size: 2.125em;

        &:hover {
           color: #585858;
        }
    }
    
    div {
        padding: 20px;
        border: 1px solid #888888;
        border-radius: 15px;
    }

    p {
        margin-top: 10px;
        color: #888888;
        font-size: 1em;
        max-width: 500px;
    }

    img {
        margin: 0 auto;
        border-radius: 50%;
        border: 5px solid #BEBEBE;
        max-width: 150px;
    }
    
`;
