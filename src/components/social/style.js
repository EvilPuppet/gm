import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 30px;

  img {
      max-width:30px;
  } 

  .item {
    margin: 0 auto;
    width: 30px;
  }
`;

