import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: #E8E8E8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 250px;
`;

export const ImageService = styled.img`
  width: 200px;
`;

export const TitleService = styled.p`
  font-size: 20px;
  color: #000;
  font-weight: bold;

  span{
    color: #f9aa33;
  }
`;
