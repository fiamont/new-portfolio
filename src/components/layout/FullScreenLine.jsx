import styled from "styled-components";

const StyledFullScreenLine = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  border-right: 3px solid var(--orange-color);
  background: none;
  height: 100%;
`;

function FullScreenLine() {
  return <StyledFullScreenLine className="ps-1 ps-sm-2 ps-md-3 ps-lg-4" />;
}

export default FullScreenLine;
