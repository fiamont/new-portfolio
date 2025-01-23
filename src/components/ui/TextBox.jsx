import styled from "styled-components";
const StyledDiv = styled.div``;

const TextBox = ({ children }) => {
  return (
    <StyledDiv className="text-box">
      <p>{children}</p>
    </StyledDiv>
  );
};

export default TextBox;
