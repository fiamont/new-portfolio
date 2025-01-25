import styled from "styled-components";

const StyledDiv = styled.div`
  background: #e2e2e2;
  box-shadow: -3px 3px 5px var(--dark-grey-color);
`;

const StyledContent = styled.div``;

const ProjectBox = ({
  heading,
  imgSrc,
  imgAlt,
  width,
  height,
  text,
  challenges,
  solutions,
}) => {
  return (
    <StyledDiv className="p-3 mt-3 mb-3">
      <h2>{heading}</h2>
      <StyledContent>
        <img src={imgSrc} alt={imgAlt} width={width} height={height} />
        <div>
          <p>{text}</p>
          <p>{challenges}</p>
          <p>{solutions}</p>
        </div>
      </StyledContent>
    </StyledDiv>
  );
};

export default ProjectBox;
