import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: translateX(-150%);
  }
`

export const ContainerDesktop = styled.div`
  color: white;
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 2;
  top: 0;
  background-color: rgba(0,0,0);
  height: 100px;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  color: white;
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 2;
  top: 0;
  background-color: rgba(0,0,0);
  height: 100px;
  overflow: hidden;
  justify-content: space-between;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ContainerImage = styled.div`
  width: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;

   @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerImageMobile = styled.div`
   @media screen and (max-width: 1200px) {
    overflow: hidden;
    display: flex;
    align-items: center;
  }
`;

export const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  padding: 30px;
  animation: ${animation} 2s;

  @media screen and (max-width: 1200px) {
    width: 130px;
    height: 130px;
  }
`;

export const ContainerMenuNavigate = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 35px;
  padding: 10px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerMenuNavigateMobile = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 90%;
  }
`;

export const ContainerHamburger = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 15px;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ButtonSchedule = styled.button`
  background-color: #f9aa33;
  width: 130px;
  height: 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  outline: none;
  animation: ${animation} 2s;

  a{
    text-decoration: none;
    outline: none;
    color: #000;

    &:hover{
      color: #FFFFFF;
    }
  }

  &:hover{
    background-color: #FD7A2A;
    transition: 0.5s;
  }

  &:active{
    opacity: 0.6;
  }

  &:focus{
    outline-style: none;
  };
`;
