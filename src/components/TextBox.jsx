import styled from "styled-components";
const StyledDiv = styled.div``;

const TextBox = ({ text }) => {
  return (
    <StyledDiv className="text-box">
      <p>{text}</p>
    </StyledDiv>
  );
};

export default TextBox;
