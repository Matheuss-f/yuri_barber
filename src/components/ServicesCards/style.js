import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: #E8E8E8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 250px;

  &:hover{
    opacity: 0.8;
    transition: 0.5s;
  }

  @media screen and (max-width: 1200px) {
    width: 200px;
    margin-bottom: 30px;
    height: 200px;
  }
`;

export const ImageService = styled.img`
  width: 150px;
`;

export const TitleService = styled.p`
  font-size: 20px;
  color: #000;
  font-weight: bold;

  span{
    color: #f9aa33;
  }

  @media screen and (max-width: 1200px) {
    font-size: 17px;
    overflow: hidden;
  }
`;
