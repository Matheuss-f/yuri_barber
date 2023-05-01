import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ContainerDesktop = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #FFFFFF;
  height: 980px;
  padding-top: 25px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 100%;
  height: 600px;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ContainerPhotos = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
