import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";

const StyledDiv = styled.div`
  background: #ececec;
  border-radius: 20px;
  box-shadow: -3px 3px 5px #cecece;
  width: 340px;
`;

const StyledImg = styled.img`
  box-shadow: -3px 3px 5px #a3a3a3;
`;

const StyledContent = styled.div``;

const StyledGithub = styled(IoLogoGithub)`
  color: var(--dark-grey-color);

  &:hover {
    color: var(--light-orange-color);
  }
`;

const ProjectBox = ({
  heading,
  imgSrc,
  imgAlt,
  width,
  height,
  text,
  challenge,
  solution,
  challengeText,
  solutionText,
  githubLink = "",
}) => {
  return (
    <StyledDiv className="mt-3 mb-3">
      <h2 className="pt-3 pb-3 m-3 mb-1">{heading}</h2>
      <StyledContent className="d-flex flex-column justify-content-center align-items-center">
        <StyledImg
          src={imgSrc}
          alt={imgAlt}
          width={width}
          height={height}
          className="justify-content-center"
        />
        <div>
          <p className="mt-4 m-3">{text}</p>
          <h4 className="mt-4 m-3">{challenge}</h4>
          <p className="m-3">{challengeText}</p>
          <h4 className="m-3">{solution}</h4>
          <p className="m-3">{solutionText}</p>
          {githubLink && (
            <p className="d-flex justify-content-end align-items-center m-3 me-4">
              Koden :
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <StyledGithub className="p-1 m-1 fs-1" />
              </a>
            </p>
          )}
        </div>
      </StyledContent>
    </StyledDiv>
  );
};

export default ProjectBox;
