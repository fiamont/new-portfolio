import workInProgress from "./../../../assets/demoWorkInProgress.png";

function VideoPlayer() {
  return (
    <>
      <div>
        <img
          src={workInProgress}
          alt="work in progress"
          className="img-fluid"
        />
      </div>
    </>
  );
}

export default VideoPlayer;
