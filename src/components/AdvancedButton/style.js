import styled from "styled-components";

export const Button = styled.button`
  background-color: #f9aa33;
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 50px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 20px;
  outline: none;

  a{
    outline: none;
    text-decoration: none;
    color: #FFFFFF;
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
  }
`;
