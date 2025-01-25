import styled from "styled-components";

const StyledDiv = styled.div`
  background: #ececec;
  border-radius: 30px;
  box-shadow: -3px 3px 5px #cecece;
  width: 340px;
`;

const StyledImg = styled.img`
  box-shadow: -3px 3px 5px #a3a3a3;
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
  githubLink,
  extraText,
}) => {
  return (
    <StyledDiv className="mt-3 mb-3">
      <h2 className="pt-3 pb-3 m-3 m-3">{heading}</h2>
      <StyledContent className="d-flex flex-column justify-content-center align-items-center">
        {githubLink ? (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <StyledImg
              src={imgSrc}
              alt={imgAlt}
              width={width}
              height={height}
              className="justify-content-center"
            />
          </a>
        ) : (
          <StyledImg
            src={imgSrc}
            alt={imgAlt}
            width={width}
            height={height}
            className="justify-content-center"
          />
        )}

        <div>
          <p className="mt-4 m-3">{text}</p>
          <p className="m-3 m-3">{challenges}</p>
          <p className="m-3 m-3">{solutions}</p>
          {extraText && <p className="m-3 m-3">{extraText}</p>}
        </div>
      </StyledContent>
    </StyledDiv>
  );
};

export default ProjectBox;
