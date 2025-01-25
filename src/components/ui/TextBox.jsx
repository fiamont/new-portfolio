import styled from "styled-components";
const StyledDiv = styled.div`
  display: block;
  padding-top: 1.8rem;
`;

const TextBox = ({ children }) => {
  return (
    <StyledDiv>
      <p>{children}</p>
    </StyledDiv>
  );
};

export default TextBox;
