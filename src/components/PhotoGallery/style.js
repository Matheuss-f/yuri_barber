import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #FFFFFF;
  height: 980px;
  padding-top: 25px;

  @media screen and (max-width: 1200px) {
    padding-top: 0px;
    height: 600px;
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
