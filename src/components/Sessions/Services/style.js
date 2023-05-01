import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #000;
`;

export const ContainerDesktop = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  height: 980px;
  padding-top: 10px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  gap: 50px;
`;

export const ContainerContentMobile = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 30px;
  }
`;

export const ContainerCardsMobile = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    padding-bottom: 50px;
    padding-top: 80px;
  }
`;
