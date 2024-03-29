const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[22%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-[15px] w-1/4">{overview}</p>
      <div className="my-6 md:my-5">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 md:text-lg rounded-lg hover:bg-opacity-80 ">
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
