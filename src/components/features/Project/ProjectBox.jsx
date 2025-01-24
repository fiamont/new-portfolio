import styled from "styled-components";

const StyledDiv = styled.div``;

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
    <StyledDiv className="project-box">
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
