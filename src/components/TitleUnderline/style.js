import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

export const AboutTitle = styled.p`
  color: #f9aa33;
  font-size: 90px;
  font-weight: bold;
  display: ${ props => props.mobileHidden ? 'none' : 'flex' };

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }
`;

export const Underline = styled.div`
  background-color: #f9aa33;
  height: 5px;
  width: 100px;
  margin-top: -15px;
`;
