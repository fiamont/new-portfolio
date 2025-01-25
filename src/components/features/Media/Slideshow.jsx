import bollarSquare from "./../../../assets/examensprojektet.png";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: var(--yellow-color);
  border-radius: 10px;
`;

function Slideshow() {
  return (
    <StyledDiv className="d-flex flex-column text-center p-3">
      <h2 className="pb-2">(Slideshow)</h2>
      <img src={bollarSquare} alt="balls" />
    </StyledDiv>
  );
}

export default Slideshow;
