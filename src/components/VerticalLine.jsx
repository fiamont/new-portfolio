import styled from "styled-components";

const StyledVerticalLine = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: ${(props) => props.width || "2px"};
  background-color: ${(props) => props.color || "black"};
  ${(props) => (props.$right ? `right: ${props.$right};` : "")}
  ${(props) => (props.$left ? `left: ${props.$left};` : "")}
    z-index: ${(props) => props.$zindex || 1};
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
