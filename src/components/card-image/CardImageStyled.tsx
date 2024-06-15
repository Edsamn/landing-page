import styled from "styled-components";

interface CardImageStyledProps {
  children: React.ReactNode;
}

const CardImageStyled = styled.div<CardImageStyledProps>`
  background: url({children}) cover;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-self: stretch;
`;

export default CardImageStyled;
