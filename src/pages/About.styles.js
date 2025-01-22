import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 5rem 5rem 0rem;

  @media (max-width: 660px) {
    flex-direction: column-reverse;
    padding: 0rem 0rem 5rem 0rem;
  }
`;
export const StyledImg = styled.img`
  border-right: 8px solid var(--yellow-color);
  border-bottom: 5px solid var(--yellow-color);

  @media (max-width: 660px) {
    margin-bottom: 1rem;
  }
`;