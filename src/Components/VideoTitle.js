const VideoTitle = ({ title, overview }) => {
    return (
      <div className="pt-36 px-6">
        <h1>{title}</h1>
        <p>{overview}</p>
        <div>
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
    );
  };
  
  export default VideoTitle;