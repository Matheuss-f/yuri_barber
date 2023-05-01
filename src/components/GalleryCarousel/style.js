import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;
    .rec.rec-arrow {
      display: none;
    }
    .rec.rec-dot.rec.rec-dot_active {
      background-color: #f9aa33;
      box-shadow: rgb(249, 170, 51) 0px 0px 1px 3px;
    }
}
`;

export const CategoryImg = styled.img``;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 310px;
  border-radius: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  background: #f9aa33;
  border-radius: 8px;
  border: none;
  height: 50px;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.5s;
  }
  &:active {
    opacity: 0.7;
  }
`;
