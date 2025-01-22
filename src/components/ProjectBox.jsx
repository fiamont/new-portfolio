import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem 0rem 0rem 6rem;

  @media (max-width: 420px) {
    padding: 0rem 0rem 0rem 2rem;
  }
`;

const StyledHeading = styled.h2`
  padding-left: 0;
`;

const StyledContent = styled.div`
  border-right: 5px solid var(--yellow-color);
  border-top: 2px solid var(--light-orange-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 0rem 0rem 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 1rem 0rem 0rem 0rem;
  }

  @media (max-width: 420px) {
    padding: 1rem 0rem 0rem 0rem;
  }
`;

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
        <div>
          <p>{text}</p>
          <p>{challenges}</p>
          <p>{solutions}</p>
        </div>
        <img src={imgSrc} alt={imgAlt} width={width} height={height} />
      </StyledContent>
    </StyledDiv>
  );
};

export default ProjectBox;
