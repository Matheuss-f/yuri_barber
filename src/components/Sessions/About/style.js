import styled from "styled-components";

export const Container = styled.div`
  background-color: #E8E8E8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 650px;
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-left: 100px;
`;

export const DescriptionText = styled.p`
  font-size: 20px;
  text-align: center;

  span{
    color: #f9aa33;
  }
`;

export const ImageAbout = styled.img`
  width: 300px;
  height: 450px;
`;

export const ContainerDescription = styled.div`
  display: flex;
  background-color: red;
  width: 50%;
`;
