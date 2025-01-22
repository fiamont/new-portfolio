import styled from "styled-components";
const StyledDiv = styled.div`
  padding: 0rem 5rem 0rem 5rem;

  @media (max-width: 700px) {
    padding: 1rem 3rem 1rem 3rem;
  }
`;

const TextBox = ({ text }) => {
  return (
    <StyledDiv className="text-box">
      <p>{text}</p>
    </StyledDiv>
  );
};

export default TextBox;
