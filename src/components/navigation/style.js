import styled from "styled-components";

export const Header = styled.header`
  grid-area: header;
  background: linear-gradient(135deg, #8844ee, #b07dfb);
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

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
    color: white;
    font-size: 1.125em;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transition: 0.1s;
  }

  nav a:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  li + li {
    margin-left: 30px;
  }
`;
