import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    opacity: 0.8;
    transition: 0.5s;
  }
`;

export const PhotoImage = styled.img`
  width: 400px;
`;
