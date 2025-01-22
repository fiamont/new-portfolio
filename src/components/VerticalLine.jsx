import styled from "styled-components";

const StyledVerticalLine = styled.div`
  position: absolute;
  top: 0;
  height: 100%; /* Höjden blir lika stor som föräldradivens höjd */
  width: ${(props) => props.width || "2px"}; /* Standardbredd på linjen */
  background-color: ${(props) => props.color || "black"}; /* Färg med props */
  ${(props) =>
    props.$right ? `right: ${props.$right};` : ""} /* Placera på höger sida */
  ${(props) =>
    props.$left ? `left: ${props.$left};` : ""} /* Placera på vänster sida */
    z-index: ${(props) =>
    props.$zindex || 1}; /* Lägg till z-index för ordning */
`;

const VerticalLine = ({ width, color, $right, $left, zindex }) => {
  return (
    <StyledVerticalLine
      width={width}
      color={color}
      $right={$right}
      $left={$left}
      $zindex={zindex}
    />
  );
};

export default VerticalLine;
