import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #FFFFFF;
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const ContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  height: 950px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerDescription = styled.div`
  width: 50%;
  text-align: center;
  font-size: 23px;

  span{
    color: #f9aa33;
  }
`;

export const ContainerVideo = styled.div``;

export const VideoWorkshop = styled.video`
  width: 280px;
`;

export const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 950px;
  padding: 15px;
  margin-top: 60px;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ContainerContentMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ContainerDescriptionMobile = styled.div`
  text-align: center;
  font-size: 23px;
  margin-bottom: 30px;
  margin-top: 30px;

  span{
    color: #f9aa33;
  }
`;

export const ContainerVideoMobile = styled.div``;

export const VideoWorkshopMobile = styled.video`
  width: 200px;
`;
