import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: translateX(-150%);
  }
`

export const ContainerHome = styled.div``;

export const ContainerDesktop = styled.div`
  width: 100vw;
  position: relative;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ImageHome = styled.img`
  width:100%;
`;

export const ContainerContent = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  margin-top: 200px;
`;

export const VideoHome = styled.video`
  width:100%;
`;

export const ContainerButtons = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${animation} 2s;
  margin-top: 70px;
`;

export const ContainerButtonsMobile = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: ${animation} 2s;
  margin-top: 20px;
  gap: 20px;
`;

export const TitleHome = styled.p`
  color: white;
  font-weight: bold;
  font-size: 6vw;
  animation: ${animation} 2s;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
  }
`;

export const SubtitleHome = styled.p`
  color: white;
  font-weight: bold;
  font-size: 4vw;
  animation: ${animation} 2s;
  padding-top: 30px;

  @media screen and (max-width: 1200px) {
    font-size: 30px;
    margin-top: -20px;
  }

  span{
    color:  #f9aa33;
  }
`;
