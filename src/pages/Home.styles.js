import styled from "styled-components";

export const HomeDiv = styled.div`
  position: relative;
`;

export const HeaderDiv = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 3rem 2rem 5rem;

  @media (max-width: 700px) {
    padding: 1rem 1rem 1rem 3rem;
  }
`;

export const HeaderOne = styled.h2`
  font-size: clamp(1rem, 3.5vw, 5rem);
  margin: 0px 0px 5px 0px;
`;

export const HeaderTwo = styled.h1`
  margin: -30px 0px -20px 0px;
  padding: 0;

  @media (max-width: 700px) {
    margin: -10px 0px -5px 0px;
    padding: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  svg {
    width: 2rem;
    height: auto;

    @media (min-width: 768px) {
      width: 3rem;
    }

    @media (min-width: 1024px) {
      width: 3rem;
    }
  }
`;
