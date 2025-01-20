const ProjectBox = ({ heading, imgSrc, imgAlt, text }) => {
  return (
    <div className="project-box">
      <h3>{heading}</h3>
      <img src={imgSrc} alt={imgAlt} />
      <p>{text}</p>
    </div>
  );
};

export default ProjectBox;
