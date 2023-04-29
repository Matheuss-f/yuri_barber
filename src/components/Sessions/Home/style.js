import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100vw;
  position: relative;
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
  margin-top: 300px;
`;

export const VideoHome = styled.video`
  width:100%;
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
