import styled from "styled-components";

const StyledFullScreenLine = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 5%;
  width: 3px;
  background-color: var(--orange-color);
  height: 100%;
`;

function FullScreenLine() {
  return <StyledFullScreenLine />;
}

export default FullScreenLine;
