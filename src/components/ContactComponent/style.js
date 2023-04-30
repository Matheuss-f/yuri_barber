import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactIcon = styled.img`
  width: 30px;
`;

export const ContainerContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContact = styled.p`
  font-size: 15px;
  color: #FFFFFF;
  margin-bottom: 0;
  margin-left: 10px;

  span{
    color: #f9aa33;
  }
`;

export const LinkContact = styled.a`
  display: flex;
  outline: none;
  align-items: center;
  text-decoration: none;

  &:hover{
    text-decoration: none;
    opacity: ${props => props.isLink ? 0.8 : 1};
  }
`;
