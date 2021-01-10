import styled from "styled-components";

export const Header = styled.header`
  grid-area: header;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-bottom: 1.5px solid  #E0E0E0;

  p {
    color: #888888;
    font-size: 2em;
    font-family: 'Big Shoulders Stencil Text', cursive;
    font-weight: 500;
  }

  img {
    max-width: 200px;
  }

  nav ul {
    display: flex;
    flex-wrap: wrap;
  }

  nav a {
    display: block;
    padding: 10px;
    color: #888888;
    font-size: 1.125em;
    transition: 0.1s;
  }

  p:hover {
    color: #585858;
  }

  nav a:hover { 
    color: #585858;
    
  }

  li + li {
    margin-left: 30px;
  }
`;
