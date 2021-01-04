import styled from "styled-components";

export const Container = styled.main`
    grid-area: content;
    max-width: 900px;
    margin: 0 auto;
    align-self: center;
    padding: 30px;
    display: grid;
    grid-template-columns: auto;
    text-align:center;
    gap: 15px;

 .avatar {
    margin: 0 auto;
    border-radius: 50%;
    border: 5px solid #BEBEBE;
 }

 h1 {
     color: #888888;
     text-transform: uppercase;
     letter-spacing: 1px;
     font-weight: 500;
}

img:hover {
    opacity: 0.8;
}

`;
