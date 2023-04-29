import styled from "styled-components";

export const ContainerHome = styled.div`
  width:100vw;
  height: 100vh;
  background-color: black;
  display: flex;
`;

export const ContainerContent = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const VideoHome = styled.video`
  width:100%;
  position: fixed;
  top: 0;
  object-fit: cover;
`;

export const ContainerButtons = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleHome = styled.p`
  color: white;
  font-weight: bold;
  font-size: 70px;
`;

export const SubtitleHome = styled.p`
  color: white;
  font-weight: bold;
  font-size: 52px;

  span{
    color:  #f9aa33;
  }
`;
