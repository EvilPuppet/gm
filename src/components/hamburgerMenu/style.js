import styled from "styled-components";

export const Header = styled.header`
  grid-area: header;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-bottom: 1.5px solid  #E0E0E0;
  height: 92.5px;

  p {
    color: #888888;
    font-size: 2em;
    font-family: 'Big Shoulders Stencil Text', cursive;
    font-weight: 500;
  }
`;


export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const StyledMenu = styled.nav`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #FFFFFF;
  border: 0.5px solid #E0E0E0;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  p {
      text-align: center;
  }
  p:hover {
    color: #585858;
  }

  a:hover { 
    color: #585858;
    
  }

  a {
    display: block;
    padding: 10px;
    color: #888888;
    font-size: 1.125em;
    transition: 0.1s;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #888888;
    text-decoration: none;
    transition: color 0.3s linear;

  }
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    .contentNav {
        margin-top: 55px;
     
    }
  
`;