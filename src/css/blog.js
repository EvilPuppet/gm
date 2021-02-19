import { animated } from 'react-spring';
import styled from "styled-components";

export const Container = styled(animated.main)`
    grid-area: content;
    max-width: 950px;
    margin: 0 auto;
    align-self: center;
    padding: 30px;
    display: grid;
    grid-template-columns: auto;
    text-align:center;
    gap: 15px;
    justify-content: center;
    margin-bottom: 100px;

    h1 {
        color: #888888;
        font-size: 2.125em;

        &:hover {
           color: #585858;
        }
    }
    

    img:hover {
        opacity: 0.8;
        fill:#888888;
    }

`;

export const BlogList = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, auto));
  grid-gap: 20px;
  list-style: none;
  
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    small {
        color: #787878;
    }
    img {
      align-self: center;
      max-width: 250px;
    }

    span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #888888;
      font-weight: 700;
    }

    section {
        p {
            color: #888888;
            font-weight: 500;
        }
    }
  }
`;

