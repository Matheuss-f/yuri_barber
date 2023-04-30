import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: translateX(-150%);
  }
`

export const TextNavigate = styled(Link)`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  animation: ${animation} 2s;

  &:hover{
    color: #f9aa33;
    text-decoration: none;
    transition: 0.5s;
  }
`;
