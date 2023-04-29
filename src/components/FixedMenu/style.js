import styled from "styled-components";

export const Container = styled.div`
  color: white;
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 2;
  top: 0;
  background-color: rgba(0,0,0);
  height: 100px;
`;

export const ContainerImage = styled.div`
  width: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  padding: 30px;
`;

export const ContainerMenuNavigate = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 35px;
  padding: 10px;
  align-items: center;
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
