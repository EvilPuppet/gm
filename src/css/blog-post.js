import { animated } from 'react-spring';
import styled from "styled-components";

export const Container = styled(animated.main)`
    grid-area: content;
    max-width: 900px;
    margin: 0 auto;
    align-self: center;
    padding: 30px;
    display: grid;
    grid-template-columns: auto;
    gap: 15px;
    justify-content: center;
    margin-bottom: 100px;

    small {
        text-align:center;
        color: #888888;
    }


    h1 {
        color: #888888;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
        text-align:center;

        &:hover {
            color: #585858;
        }
    }

    h2 {
        color: #585858;
        letter-spacing: 1px;
        font-weight: 500;
        
    }
    



img:hover {
    opacity: 0.8;
    fill:#888888;
}

`;
